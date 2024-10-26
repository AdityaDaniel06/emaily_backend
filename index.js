const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
app.use(express.json());

passport.use(new GoogleStrategy());
//client id
//clientSecret
const port = 7070;
app.listen(port, () => {
  console.log("listening on port");
});
