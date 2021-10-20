const Sequelize = require('sequelize');
const config = require('../config/database');

const Community = require('../models/Community');
const Path = require('../models/Path');
const Post = require('../models/Post');
const Subscription = require('../models/Subscription');
const User = require('../models/User');

const connection = new Sequelize(config);

Community.init(connection);
Path.init(connection);
Post.init(connection);
Subscription.init(connection);
User.init(connection);

Community.associate(connection.models);
Path.associate(connection.models);
Post.associate(connection.models);
Subscription.associate(connection.models);
User.associate(connection.models);

module.exports = connection;