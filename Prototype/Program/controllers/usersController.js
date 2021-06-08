/// Imports
const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const passport = require('passport');

/// Exports
// Render main Page
exports.getMainPage = (req, res) => {
    User.fetchUsers(Users => {
        let today = {
            date: date.getDate(),
            weekday: date.getWeekDay()
        };

        console.log(Users);
        res.render('index.ejs'); //{ date: today, todoItems: Users }
    });
};
// POST user sign up
exports.signUserUp = (req, res) => {
    let newUserModel =
        new userModel(
            req.body.firstNameF,
            req.body.lastNameF,
            req.body.emailF,
            req.body.passwordF
        );
    newUserModel.saveUser();
    res.redirect('/');
};
// User Sign In Proccess
exports.signUserIn = (req, res) => {
    console.log('SIGNING IN USER...')
    let newUserModel =
        new userModel(
            req.body.firstNameF,
            req.body.lastNameF,
            req.body.emailF,
            req.body.passwordF
        );
    // console.log(newUserModel);
    newUserModel.signIn(); // TODO: validate if email already exists in DB
    res.redirect('/');
}