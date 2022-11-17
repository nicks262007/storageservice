const httpStatus = require('http-status');

const { storageService } = require('../services');
const catchAsync = require('../utils/catchAsync');

exports.store = catchAsync(async (req, res) => {
  const storeResponse = await storageService.store(req.body);
  res.status(httpStatus.OK).send(storeResponse);
});

exports.retrieve = catchAsync(async (req, res) => {
  const retrieveResponse = await storageService.retrieve(req.params.hash);
  res.status(httpStatus.OK).send(retrieveResponse.file);
});
