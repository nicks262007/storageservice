const { store, retrieve } = require('../repositories/storage.repository');

exports.store = async (payload) => {
  return { hash: await store(payload)};
};

exports.retrieve = async (hash) => {
  return { file: await retrieve(hash) };
};
