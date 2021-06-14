/// Imports
const userModel = require('../models/userModel');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

/// Exports
// Render main Page
// exports.getMainPage = (req, res, next) => {
//     // User.fetchUsers(Users => {
//     //     let today = {
//     //         date: date.getDate(),
//     //         weekday: date.getWeekDay()
//     //     };

//     //     console.log(Users);
//     //     res.render('index.ejs'); //{ date: today, todoItems: Users }
//     // });
// };

// POST user sign up
exports.signUserUp = (req, res) => {
    let newUserModel =
        new userModel(
            req.body.firstNameF,
            req.body.lastNameF,
            req.body.emailF,
            req.body.passwordF
        );
    let user_email = req.body.emailF;
    console.log(user_email);
    User.findOne({ email: user_email }, function (err, user) {
        if (err) {
            console.log(err);
        }
        if (user) {
            console.log('--USER ALREADY EXISTS!--')
            let message = {
                type: 'danger',
                intro: 'Email',
                message: 'That email is already taken. Try another one.'
            }
            res.render('signup.ejs', { message: message });
        } else {
            newUserModel.saveUser();
            res.redirect('/signin');
        }
    });
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

    function signIn() {
        // fetch user and test password verification
        var user_email = req.body.emailF;
        var user_password = req.body.passwordF;

        User.findOne({ email: user_email }, function (err, user) {
            if (err) {
                console.log(err);
            }
            if (user) {
                console.log('INSERTED EMAIL: ' + user_email);
                console.log('INSERTED PASSWORD: ' + user_password);
                console.log(`--'${user_email}' EXISTS--`);

                // Load salt and hash from your password DB.
                // Then generate the new password to compare with.
                let salt = user.pwSalt;
                bcrypt.hash(user_password, salt, function (err, hash) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    user_password = hash;
                    console.log('Successfully hashed password!');
                });

                // Compare generated passwords
                bcrypt.compare(user_password, user.password).then(function (result) {
                    console.log('PASSWORD MATCHES: ' + result)

                    // session save
                    if (result) {
                        req.session.userId = user._id // save user id to session
                        console.log('PASSWORD CORRECT!');
                        req.session.user = {
                            uuid: '12234-2345-2323423'
                        }
                        req.session.save(err => {
                            if (err) {
                                console.log('SESSION ERROR: ' + err);
                            } else {
                                console.log('SUCCESS!');
                                // res.send(req.session.user);
                            }
                        });
                        res.redirect('/home');
                    } else {
                        req.session.userId = undefined; // delete user id of session
                        console.log('PASSWORD INCORRECT!');
                        let message = {
                            type: 'danger',
                            intro: 'Password',
                            message: 'Incorrect password!'
                        }
                        res.render('signin.ejs', { message: message });
                    }
                });
            } else {
                console.log('--USER DOES NOT EXIST--');
                let message = {
                    type: 'danger',
                    intro: 'Email',
                    message: `That email does not exist. Try another one.`
                }
                res.render('signin.ejs', { message: message });
            }
        });
    }
    signIn();
}
// User Sign Out Proccess
exports.signUserOut = (req, res, next) => {
    console.log('SIGNING OUT USER...')
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Session was destroyed');
        }
    });
    res.redirect('/');
}