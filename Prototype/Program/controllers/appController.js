/// Exports
// Main page
exports.mainPage = (req, res) => {
    res.render('home-out.ejs');
};
// Sign Up Form
exports.signUpPage = (req, res) => {
    res.render('signup.ejs');
};
// Sign In Form
exports.signInPage = (req, res) => {
    res.render('signin.ejs');
};