const uuid = require('uuid');
const { save, getAllClients, getClient, update } = require('../repositories/client.repository');

exports.save = async (payload) => {
  payload._id = uuid.v4();
  return await save(payload);
};

exports.getAllClients = async (wkClient) => {
  return await getAllClients(wkClient);
};

exports.getClient = async (clientId) => {
  return await getClient(clientId);
};

exports.update = async (clientId, did) => {
  return await update(clientId, did);
};
