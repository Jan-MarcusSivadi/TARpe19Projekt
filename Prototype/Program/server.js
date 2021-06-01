/// Imports
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes
const routes = require('./routes/web');

// use express
const app = express();

// set view engine with ejs
app.set('view engine', ejs);

// use express static method for public folder (Design)
app.use(express.static('public'));

// use routes
app.use(routes);

// listen for http://localhost:3000/...
app.listen(process.env.PORT || 3000, function () {
    console.log("Server has started.");
});

