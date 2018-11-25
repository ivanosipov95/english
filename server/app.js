const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();

const config = require('./config/config');
const passportStrategy = require('./middleware/passport');

const rest = require('./rest');
const api = '/api';

mongoose.connect(config.mongoURI)
  .then(() => console.log('Connect to mongoDB is established'))
  .catch(error => console.log(error));

app.use(passport.initialize());
passportStrategy(passport);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(api, rest.authRouter);
app.use(api, rest.lingualeoRouter);

module.exports = app;
