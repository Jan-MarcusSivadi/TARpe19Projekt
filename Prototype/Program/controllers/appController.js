/// Exports
// Render main Page
exports.getMainPage = (req, res) => {
    res.render('home.ejs');
};
// Render sign up Page
exports.getSignUpPage = (req, res) => {
    res.render('signup.ejs');
};
// Render sign up Page
exports.getSignInPage = (req, res) => {
    res.render('signin.ejs');
};