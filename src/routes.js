const express = require('express');

const UserController = require('./controllers/UserController');
const PostController = require('./controllers/PostController');
const CommunityController = require('./controllers/CommunityController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/users/:username', UserController.show);
routes.post('/users', UserController.store);

routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);
routes.post('/posts', PostController.store);

routes.get('/community', CommunityController.index);
routes.get('/community/:name', CommunityController.show);

module.exports = routes;
