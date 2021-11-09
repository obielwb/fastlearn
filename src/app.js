// TODO: get all the relations working properly
// TODO: make the API work at all (lol)
require('dotenv').config();
require('./database');

const express = require('express');
const app = express();

const routes = require('./routes');

app.use(express.json());
app.use(routes);

module.exports = app;