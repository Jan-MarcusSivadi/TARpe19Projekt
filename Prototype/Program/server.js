/// Imports
const express = require('express');
const flash = require('flash');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes
const routes = require('./routes/web');

// passport
const passport = require('passport');

// session
const session = require('express-session');
const MongoStore = require('connect-mongo');

// config
const config = require('./config/database');

// Connect to DB
const MongoClient = require('mongodb').MongoClient;
const uri = config.database;
const client = new MongoClient(uri, { family: 4 }, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});
mongoose.connect(uri, { family: 4 }, { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;

// Check connection
db.once('open', function () {
    console.log('Connected to MongoDB');
})

// Check for DB errors
db.on('error', function (err) {
    console.log(err);
});

// use express
const app = express();
// app.use(flash);

// session
var hour = 3600000;
console.log(MongoStore)
app.use(session({
    secret: '1234',
    store: MongoStore.create({
        mongoUrl: uri, ttl: 14 * 24 * 60 * 60, autoRemove: 'native'
    }),
    resave: false,
    saveUninitialized: false,
}));

app.use((req, res, next)=> {
    // flash a message
    res.locals.message = req.session.message;
    delete req.session.messages;
    next();
});

// set view engine with ejs
app.set('view engine', ejs);

// use express static method for public folder (Design)
app.use(express.static('public'));

// use bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// use passport (Middleware)
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// use routes
app.use(routes);

// listen for http://localhost:3000/...
app.listen(process.env.PORT || 3000, function () {
    console.log("Server has started.");
});

