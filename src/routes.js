const express = require('express');

const auth = require('./middlewares/auth');

const CommentController = require('./controllers/CommentController');
const CommunityController = require('./controllers/CommunityController');
const PathController = require('./controllers/PathController');
const PostController = require('./controllers/PostController');
const SubscriptionController = require('./controllers/SubscriptionController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.use(auth);

routes.get('/communities/:community_id/posts/:id/comments', CommentController.index);
routes.get('/communities/:community_id/posts/:id/comments/:id', CommentController.show);
routes.post('/communities/:community_id/posts/:id/comments', CommentController.store);

routes.get('/communities', CommunityController.index);
routes.get('/communities/:id', CommunityController.show);
routes.post('/communities', CommunityController.store);

routes.get('/communities/:community_id/paths', PathController.index);
routes.get('/communities/:community_id/paths/:path_id', PathController.show);
routes.post('/communities/:community_id/paths', PathController.store);

routes.get('/communities/:community_id/posts', PostController.index);
routes.get('/communities/:community_id/posts/:id', PostController.show);
routes.post('/communities/:community_id/posts', PostController.store);

routes.get('/users/subscriptions', SubscriptionController.index);
routes.get('/users/:user_id/subscriptions', SubscriptionController.show);
routes.post('/users/:user_id/subscriptions', SubscriptionController.store);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);

module.exports = routes;
