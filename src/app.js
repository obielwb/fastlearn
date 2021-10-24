// TODO: get all the relations working properly
// TODO: fix uuid errors
require('dotenv').config();
require('./database');

const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(routes);

module.exports = app;