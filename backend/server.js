const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require("express-session");
const cookieParser = require("cookie-parser");

dotenv.config({ path: './config.env' });

const userRoutes = require('./routes/user.routes')
const questionRoutes = require('./routes/question.routes')

const app = express();
const PORT = process.env.PORT || 3000;

require("./config/passport");

app.use(express.json());
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const cluster = "cluster0";
const dbname = "users_db";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.nnuwe.mongodb.net/${dbname}`, 
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log(`Connected to mongoDB`.yellow.bold);
});

app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/outlook',
  passport.authenticate('azure_ad_oauth2'));

app.get('/auth/outlook/callback', 
  passport.authenticate('azure_ad_oauth2', { failureRedirect: '/users' }),
  function (req, res) {
    res.redirect('/users');
  });

app.use("/users", userRoutes);
app.use("/questions", questionRoutes);

app.listen(PORT, ()=> {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold);
});