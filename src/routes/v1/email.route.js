const express = require('express');

const emailController = require('../../controllers/email.controller');

const router = express.Router();

router
  .route('/invite-client')
  .post(emailController.inviteClient);

router
  .route('/send-credential')
  .post(emailController.sendCredential);

module.exports = router;
