require('dotenv').config();

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const routes = require('./routes');

app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use('/images', express.static('./public/images'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/css', express.static('./public/styles/css'));

app.use(routes);

module.exports = app;
