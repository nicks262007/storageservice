const ClientModel = require('../models/client.model');

const save = async (client) => {
  try {
    const clientDoc = new ClientModel(client)
    return Promise.resolve(await clientDoc.save());
  } catch (e) {
    console.log("Error while creating client", e);
    return Promise.reject(e);
  }
}

const getAllClients = async (wkClient) => {
  try {
    const query = wkClient ? { wkClient: wkClient } : {};
    return Promise.resolve(await ClientModel.find(query));
  } catch (e) {
    console.log("Error while fetching clients", e);
    return Promise.reject(e);
  }
}

const getClient = async (clientId) => {
  try {
    return Promise.resolve(await ClientModel.findById(clientId));
  } catch (e) {
    console.log("Error while fetching client by id", e);
    return Promise.reject(e);
  }
}

const update = async (clientId, did) => {
  try {
    return Promise.resolve(await ClientModel.findByIdAndUpdate(clientId, { did: did }, { new: true }));
  } catch (e) {
    console.log("Error while updating client by id", e);
    return Promise.reject(e);
  }
}

module.exports = {
  save: save,
  update: update,
  getClient: getClient,
  getAllClients: getAllClients,
};
