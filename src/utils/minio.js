const { Client } = require('minio');

const getMinioClient = async () => {
  const minioClient = new Client({
    endPoint: process.env.MINIO_HOSTNAME,
    port: +process.env.MINIO_HOST_PORT,
    useSSL: true,
    accessKey: process.env.MINIO_TENANT_ACCESS_KEY,
    secretKey: process.env.MINIO_TENANT_SECRET_KEY,
  });

  return minioClient;
};

const initializeMinio = async () => {
  try {
    const minioClient = await getMinioClient();
    const exists = await minioClient.bucketExists(process.env.BUCKET_NAME);
    console.log('Bucket Exists: ', exists);
    if (!exists) {
      await minioClient.makeBucket(process.env.BUCKET_NAME, process.env.BUCKET_REGION);
      console.log('Bucket Created');
    }
  } catch (error) {
    console.log('Initialize Error:', error);
    throw error;
  }
};

module.exports = {
  getMinioClient,
  initializeMinio,
};
