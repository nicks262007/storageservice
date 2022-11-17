const httpStatus = require('http-status');

const { credentialService } = require('../services');
const catchAsync = require('../utils/catchAsync');

exports.save = catchAsync(async (req, res) => {
  const saveResponse = await credentialService.save(req.body);
  res.status(httpStatus.CREATED).send(saveResponse);
});

exports.update = catchAsync(async (req, res) => {
  const credentialId = req.params.credentialId;
  const updateResponse = await credentialService.update(credentialId, req.body.did);
  res.status(httpStatus.CREATED).send(updateResponse);
});

exports.getAllCredentials = catchAsync(async (req, res) => {
  const getAllCredentialsResponse = await credentialService.getAllCredentials(req.query);
  res.status(httpStatus.OK).send(getAllCredentialsResponse);
});
