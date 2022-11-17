const express = require('express');

const clientController = require('../../controllers/client.controller');

const router = express.Router();

router
  .route('/')
  .post(clientController.save);

router
  .route('/')
  .get(clientController.getAllClients);

router
  .route('/:clientId')
  .get(clientController.getClient);

router
  .route('/:clientId')
  .patch(clientController.update);

module.exports = router;
