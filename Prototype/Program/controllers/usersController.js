/// Imports
const userModel = require('../models/userModel');

/// Exports
// Render main Page
exports.getMainPage = (req, res) => {
    User.fetchUsers(Users => {
        let today = {
            date: date.getDate(),
            weekday: date.getWeekDay()
        };

        console.log(Users);
        res.render('index.ejs', { date: today, todoItems: Users });
    });  
};
// POST new User
exports.postNewUser = (req, res) => {
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
// Delete User
exports.deleteUser = (req, res) => {
    User.deleteUser(req.body.checkbox);
    res.redirect('/');
};