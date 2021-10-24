const express = require('express');

const CommentsController = require('./controllers/CommentsController');
const CommunityController = require('./controllers/CommunityController');
const PathController = require('./controllers/PathController');
const PostController = require('./controllers/PostController');
const SubscriptionController = require('./controllers/SubscriptionController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/comments', CommentsController.index);
routes.get('/comments/:id', CommentsController.show);
routes.post('/comments/:id', CommentsController.store);

routes.get('/communities', CommunityController.index);
routes.get('/communities/:name', CommunityController.show);
routes.post('/communities/:name', CommunityController.store);

routes.get('/paths', PathController.index);
routes.get('/paths/:path_id', PathController.show);
routes.post('/paths', PathController.store);

routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);
routes.post('/posts', PostController.store);

// TODO: make subscriptions route private
routes.get('/users/subscriptions', SubscriptionController.index);
routes.get('/users/:user_id/subscriptions', SubscriptionController.show);
routes.post('/users/:user_id/subscriptions', SubscriptionController.store);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);

module.exports = routes;
