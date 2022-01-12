require('dotenv').config();
const express = require('express');
// const mongoose = require('mongoose');
const session = require('express-session');
const passportLocalMongoose = require('passport-local-mongoose');
const mainRoute = require("./routes/mainRoute");
const ejs = require("ejs")

const app = express();

require("./models/db") // connect to DB
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

//initialize session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});