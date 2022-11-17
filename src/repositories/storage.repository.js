const crypto = require('crypto');

const { getMinioClient } = require('../utils/minio');

const store = async(payload) => {
  const minio = await getMinioClient();
  const docBuffer = Buffer.from(JSON.stringify(payload.document));
  const hash = crypto.createHash('sha256').update(Buffer.from(payload.did)).digest('hex');
  await minio.putObject(process.env.BUCKET_NAME, hash, docBuffer);

  return Promise.resolve(hash);
}

const retrieve = async(did) => {
  const minio = await getMinioClient();
  const hash = crypto.createHash('sha256').update(Buffer.from(did)).digest('hex');
  const objectsStream = await minio.getObject(process.env.BUCKET_NAME, hash);
  let object = '';

  await new Promise((resolve, reject) => {
    objectsStream.on('data', (obj) => {
      object += obj.toString();
    });
    objectsStream.on('end', () => {
      resolve(object);
    });
    objectsStream.on('error', (e) => {
      logger.error('PSRepository::Retrieve::Error => From ObjectStream: ', e);
      reject(e);
    });
  });
  return Promise.resolve(JSON.parse(object));
}

module.exports = {
  store,
  retrieve,
};
