/// Imports
/* OLD CODE
const fs = require('fs');
const path = require('path');
const { callbackify } = require('util');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'users.json');
*/

const User = require('../models/user');

const bcrypt = require('bcryptjs');
SALT_WORK_FACTOR = 1;

/// Export User class
module.exports = class userModel {

    // constrtuctor
    constructor(first_name, last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    // save User to DB
    saveUser() {
        let newUser = new User({
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            pwSalt: null
        });

        bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
            if (err) {
                console.log(err);
                return;
            }
            newUser.pwSalt = salt;
            console.log('Successfully saved salt to DB.');
            bcrypt.hash(newUser.password, salt, function (err, hash) {
                if (err) {
                    console.log(err);
                    return;
                }
                newUser.password = hash;
                console.log('Successfully saved hash to DB.');
                newUser.save(function (err) {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        console.log(`Success! '${newUser.first_name} ${newUser.last_name}' user was saved to DB.`)
                        console.log(`They can now sign into their account.`);
                    }
                });
            });
        });
    }
}
