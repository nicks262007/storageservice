const httpStatus = require('http-status');

const { clientService } = require('../services');
const catchAsync = require('../utils/catchAsync');

exports.save = catchAsync(async (req, res) => {
  const saveResponse = await clientService.save(req.body);
  res.status(httpStatus.CREATED).send(saveResponse);
});

exports.getAllClients = catchAsync(async (req, res) => {
  const wkClient = req.query.wkClient;
  const getAllClientsResponse = await clientService.getAllClients(wkClient);
  res.status(httpStatus.OK).send(getAllClientsResponse);
});

exports.getClient = catchAsync(async (req, res) => {
  const clientId = req.params.clientId;
  const getClientResponse = await clientService.getClient(clientId);
  res.status(httpStatus.OK).send(getClientResponse);
});

exports.update = catchAsync(async (req, res) => {
  const clientId = req.params.clientId;
  const did = req.body.did;
  const updateResponse = await clientService.update(clientId, did);
  res.status(httpStatus.OK).send(updateResponse);
});
