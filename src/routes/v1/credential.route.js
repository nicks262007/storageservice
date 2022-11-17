const express = require('express');

const credentialController = require('../../controllers/credential.controller');

const router = express.Router();

router
  .route('/')
  .post(credentialController.save);

router
  .route('/:credentialId')
  .patch(credentialController.update);

router
  .route('/')
  .get(credentialController.getAllCredentials);

module.exports = router;
