const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./dist/english-helper'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname, 'dist', 'english-helper', 'index.html'
      )
    )
  })
}


module.exports = app;
