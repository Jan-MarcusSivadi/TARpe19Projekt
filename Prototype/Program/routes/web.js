/// Imports
const express = require('express');
const appController = require('../controllers/appController');
const error404Controller = require('../controllers/err404Controller');
const router = express.Router();

/// Routes
// main page & home
router.get('/', appController.getMainPage);
router.get('/home/', appController.getMainPage);
router.get('/signup/', appController.getSignUpPage);
router.post('/signup/', appController.getMainPage);
router.get('/signin/', appController.getSignInPage);
// error 404
router.get('*', error404Controller.getErrorPage);

module.exports = router;