require('dotenv').config();

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'));
app.use('/icons', express.static('./public/icons'));
app.use('/images', express.static('./public/images'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/css', express.static('./public/styles/css'));

const routes = require('./routes');

app.use(routes);

module.exports = app;
