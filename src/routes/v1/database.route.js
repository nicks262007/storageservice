const express = require('express');

const databaseController = require('../../controllers/database.controller');

const router = express.Router();

router
  .route('/documents')
  .post(databaseController.save);

router
  .route('/documents')
  .get(databaseController.getAllDocuments);

router
  .route('/documents/:documentId')
  .get(databaseController.getDocument);

module.exports = router;
