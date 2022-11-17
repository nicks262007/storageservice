const CredentialModel = require('../models/credential.model');

const save = async (credential) => {
  try {
    const credentialDoc = new CredentialModel(credential)
    return Promise.resolve(await credentialDoc.save());
  } catch (e) {
    console.log("Error while creating credential", e);
    return Promise.reject(e);
  }
}

const update = async (credentialId, client) => {
  try {
    return Promise.resolve(await CredentialModel.findByIdAndUpdate(credentialId, { client: client }, { new: true }));
  } catch (e) {
    console.log("Error while creating credential", e);
    return Promise.reject(e);
  }
}

const getAllCredentials = async (query) => {
  try {
    return Promise.resolve(await CredentialModel.find(query));
  } catch (e) {
    console.log("Error while fetching credential", e);
    return Promise.reject(e);
  }
}

module.exports = {
  save: save,
  update: update,
  getAllCredentials: getAllCredentials,
};
