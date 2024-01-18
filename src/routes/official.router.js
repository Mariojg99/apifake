const express = require('express');
const router = express.Router();
const officialController = require('../controllers/official.controller');

router
    .post('/getByIdNumber', officialController.getByIdNumber)

module.exports = router;