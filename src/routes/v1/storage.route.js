const express = require('express');

const storageController = require('../../controllers/storage.controller');

const router = express.Router();

router
  .route('/store')
  .post(storageController.store);

router
  .route('/retrieve/:hash')
  .get(storageController.retrieve);

module.exports = router;
