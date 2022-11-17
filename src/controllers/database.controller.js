const httpStatus = require('http-status');

const { databaseService } = require('../services');
const catchAsync = require('../utils/catchAsync');

exports.save = catchAsync(async (req, res) => {
  const saveResponse = await databaseService.save(req.body);
  res.status(httpStatus.CREATED).send(saveResponse);
});

exports.getAllDocuments = catchAsync(async (req, res) => {
  const owner = req.query.owner;
  const getAllDocumentsResponse = await databaseService.getAllDocuments(owner);
  res.status(httpStatus.OK).send(getAllDocumentsResponse);
});

exports.getDocument = catchAsync(async (req, res) => {
  const documentId = req.params.documentId;
  const getDocumentResponse = await databaseService.getDocument(documentId);
  res.status(httpStatus.OK).send(getDocumentResponse);
});
