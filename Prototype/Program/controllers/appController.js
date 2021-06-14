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
// Computer apps
exports.computerApps = (req, res, next) => {
    res.render('cApps.ejs');
};
// Mobile apps
exports.mobileApps = (req, res, next) => {
    res.render('mApps.ejs');
};
// Rating
exports.rateUs = (req, res, next) => {
    res.render('rating.ejs');
};
// Rating
exports.contacts = (req, res, next) => {
    res.render('contactUs.ejs');
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