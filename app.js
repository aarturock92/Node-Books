'use strict';

const express = require('express');
const bodyParse = require('body-parser');

const app = express();

const user_routes = require('./routes/UserRoute');

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.use('/api', user_routes);

module.exports = app;