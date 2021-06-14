/// Exports
// Main page
exports.mainPage = (req, res, next) => {
    const { userId } = req.session;
    console.log(userId);
    // req.session.viewCount += 1;
    userId ? // test if user is signed into session
        res.render('home-in.ejs')
        :
        res.render('home-out.ejs');
};
// Sign Up Form
exports.signUpPage = (req, res, next) => {
    // res.render('signup.ejs');
    let message = undefined;
    res.render('signup.ejs', { message: message });
};
// Sign In Form
exports.signInPage = (req, res, next) => {
    let message = undefined;
    res.render('signin.ejs', { message: message });
};