const mongoose = require('mongoose');

const CredentialSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: false,
  },
  clientEmail: {
    type: String,
    required: true,
  },
  wkClientDID: {
    type: String,
    required: true,
  },
  wkClientName: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
    default: new Date().toISOString(),
  },
  updatedAt: {
    type: String,
    required: true,
    default: new Date().toISOString(),
  },
});

// Duplicate the ID field.
CredentialSchema.virtual('id').get(function () {
  return this._id;
});

// Ensure virtual fields are serialised.
CredentialSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => { delete ret._id; },
});

module.exports = mongoose.model('Credential', CredentialSchema);
