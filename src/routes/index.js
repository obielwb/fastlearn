const express = require('express');
const routes = express.Router();

const home = require('./home');
const community = require('./community');
const post = require('./post');
const user = require('./user');

routes.use('/', home);
routes.use('/community', community);
routes.use('/post', post);
routes.use('/user', user);

// temporary routes
const temp = require('./temp');
routes.use('/temp', temp);

module.exports = routes;