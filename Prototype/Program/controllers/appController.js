/// Exports
// Render main Page
exports.getMainPage = (req, res) => {
    res.render('home-out.ejs');
};
// Render sign up Page
exports.getSignUpPage = (req, res) => {
    res.render('signup.ejs');
};
// Render sign in Page
exports.getSignInPage = (req, res) => {
    res.render('signin.ejs');
};

// Sign user in
exports.postSignIn = (req, res) => {
    let email = req.body.emailF,
        password = req.body.passwordF;

    console.log(
        'email: ' + email
        + '\n' +
        'password: ' + password
    );
    res.render('home-in.ejs');
};