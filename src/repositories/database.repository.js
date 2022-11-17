const DocumentModel = require('../models/document.model');

const save = async(document) => {
  try {
    const doc = new DocumentModel(document)
    return Promise.resolve(await doc.save());
  } catch(e) {
    console.log("Error while saving document", e);
    return Promise.reject(e);
  }
}

const getAllDocuments= async(owner) => {
  try {
    const query = owner? {owner: owner}: {};
    return Promise.resolve(await DocumentModel.find(query));
  } catch(e) {
    console.log("Error while fetching all documents", e);
    return Promise.reject(e);
  }
}

const getDocument= async(documentId) => {
  try {
    return Promise.resolve(await DocumentModel.findById(documentId));
  } catch(e) {
    console.log("Error while fetching document by id", e);
    return Promise.reject(e);
  }
}

module.exports = {
  save: save,
  getDocument: getDocument,
  getAllDocuments: getAllDocuments,
};
