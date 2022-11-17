const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  _id: {
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
  did: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
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
ClientSchema.virtual('id').get(function () {
  return this._id;
});

// Ensure virtual fields are serialised.
ClientSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => { delete ret._id; },
});

module.exports = mongoose.model('Client', ClientSchema);
