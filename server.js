require('dotenv').config();
const express = require("express");
const mongooae = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose')

const app = express();
const port = 3000;
app.listen(port,()=>{
    console.log(`Server is runnin on port${port}`)
})

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended = true}));