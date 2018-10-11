const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const rest = require('./rest');
const api = '/api';

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(api, rest.authRouter);

module.exports = app;
