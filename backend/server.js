const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const passport = require('passport');

dotenv.config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 9000;

app.listen(PORT, ()=> {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold);
});

app.get('/auth/outlook', 
  passport.authenticate('azure_ad_oauth2', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });