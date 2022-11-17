const uuid = require('uuid');
const { save, getAllDocuments, getDocument } = require('../repositories/database.repository');

exports.save = async (payload) => {
  payload._id = uuid.v4();
  return await save(payload);
};

exports.getAllDocuments = async (owner) => {
  return await getAllDocuments(owner);
};

exports.getDocument = async (documentId) => {
  return await getDocument(documentId);
};
