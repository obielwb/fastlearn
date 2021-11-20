// TODO: get all the relations working properly
// TODO: make the API work at all (lol)
require('dotenv').config();
require('./database');

const express = require('express');
const cors = require('cors');

const app = express();

const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use(routes);

module.exports = app;
