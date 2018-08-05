const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

// clientID 638362341365-an7jd9mjl8bqho256g9a9fao6ikg86uo.apps.googleusercontent.com
// clientSecret r274BkHUdlEfBWgmagJER44f
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);
