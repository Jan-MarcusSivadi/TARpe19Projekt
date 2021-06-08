/// Imports
const express = require('express');
const appController = require('../controllers/appController');
const usersController = require('../controllers/usersController');
const error404Controller = require('../controllers/err404Controller');
const router = express.Router();


/// Routes
// main page & home
router.get('/', appController.mainPage);
router.get('/home/', appController.mainPage);

// POST up page
router.post('/signup/', appController.signUpPage);
// POST in page
router.post('/signin/', appController.signInPage);
// // GET in page (error)
// router.get('/signin/', appController.signInPage);

// POST user sign up
router.post('/signingup/', usersController.signUserUp);
// POST user sign in
router.post('/signingin/', usersController.signUserIn);

// error 404
router.get('*', error404Controller.errorPage);

module.exports = router;