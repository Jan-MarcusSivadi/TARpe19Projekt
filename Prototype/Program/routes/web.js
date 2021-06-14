/// Imports
const express = require('express');
const appController = require('../controllers/appController');
const usersController = require('../controllers/usersController');
const error404Controller = require('../controllers/err404Controller');
const router = express.Router();

/// Routes
const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/signin');
    } else {
        next();
    }
}
const redirectHome = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/home');
    } else {
        next();
    }
}

router.get('/', appController.mainPage);
router.get('/home/', redirectLogin, appController.mainPage);

router.get('/signin/', redirectHome, appController.signInPage);

router.get('/signup/', redirectHome, appController.signUpPage);

router.post('/signup/', redirectHome, usersController.signUserUp);
router.post('/signin/', redirectHome, usersController.signUserIn);
router.post('/signout/', redirectLogin, usersController.signUserOut);

// main page & home
// router.get('/', appController.mainPage);
// router.get('/home/', appController.mainPage);

// // POST up page
// router.post('/signup/', appController.signUpPage);
// // POST in page
// router.post('/signin/', appController.signInPage);
// // // GET in page (error)
// // router.get('/signin/', appController.signInPage);

// // POST user sign up
// router.post('/signingup/', usersController.signUserUp);
// router.post('/signingup/', usersController.signUserUp);
// // POST user sign in
// router.post('/signingin/', usersController.signUserIn);
// // POST user sign out
// router.post('/signout/', usersController.signUserOut);


// error 404
router.get('*', error404Controller.errorPage);

module.exports = router;