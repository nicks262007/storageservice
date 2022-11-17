const uuid = require('uuid');
const { save, update, getAllCredentials } = require('../repositories/credential.repository');
const { getAllClients } = require('../repositories/client.repository');
const { getAllDocuments } = require('../repositories/database.repository');

exports.save = async (payload) => {
  payload._id = uuid.v4();
  return await save(payload);
};

exports.update = async (credId, client) => {
  return await update(credId, client);
};

exports.getAllCredentials = async (query) => {
  let credentials = await getAllCredentials(query);
  let result;
  if (query.document) {
    let clients = await getAllClients(credentials.wkClientDID);
    result = credentials.map((cred) => {
      let tempClient = clients.find(client => client.did === cred.client);
      return { ...cred.toObject(), clientName: tempClient.name };
    });
  } else if (query.client) {
    let documents = await getAllDocuments(credentials.wkClientDID);
    result = credentials.map((cred) => {
      let tempDoc = documents.find(doc => doc.did === cred.document);
      return { ...cred.toObject(), documentName: tempDoc.name, documentHash: tempDoc.hash };
    });
  } else {
    result = credentials;
  }
  return result;
};
