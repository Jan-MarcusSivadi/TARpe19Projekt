/// Imports
const express = require('express');
const appController = require('../controllers/appController');
const usersController = require('../controllers/usersController');
const error404Controller = require('../controllers/err404Controller');
const router = express.Router();

/// Routes
// main page & home
router.get('/', appController.getMainPage);
router.get('/home/', appController.getMainPage);

// sign up page
router.post('/signup/', appController.getSignUpPage);
// sign in page
router.post('/signin/', appController.getSignInPage);
// post user sign up
router.post('/signingup/', usersController.postNewUser);
// post user sign in


// error 404
router.get('*', error404Controller.getErrorPage);

module.exports = router;