const httpStatus = require('http-status');

const { emailService } = require('../services');
const catchAsync = require('../utils/catchAsync');

exports.inviteClient = catchAsync(async (req, res) => {
  const inviteClientResponse = await emailService.inviteClient(req.body);
  res.status(httpStatus.CREATED).send(inviteClientResponse);
});

exports.sendCredential = catchAsync(async (req, res) => {
  const sendCredentialResponse = await emailService.sendCredential(req.body);
  res.status(httpStatus.CREATED).send(sendCredentialResponse);
});
