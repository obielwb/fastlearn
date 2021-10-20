const express = require('express');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/users/:username', UserController.get);

routes.post('/users', UserController.store);

module.exports = routes;