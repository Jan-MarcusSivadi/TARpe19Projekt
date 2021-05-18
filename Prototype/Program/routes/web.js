/// Imports
const express = require('express');
const appController = require('../controllers/appController');
// const error404Controller = require('../controllers/error404Controller');
const router = express.Router();

/// Routes
// main page
router.get('/', appController.getMainPage);
// error 404
// router.get('*', error404Controller.getErrorPage);

module.exports = router;