const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  did: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  owner: {
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
DocumentSchema.virtual('id').get(function () {
  return this._id;
});

// Ensure virtual fields are serialised.
DocumentSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => { delete ret._id; },
});

module.exports = mongoose.model('Document', DocumentSchema);
