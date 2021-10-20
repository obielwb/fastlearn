const Sequelize = require('sequelize');
const config = require('../config/database');

const User = require('../models/User');

const connection = new Sequelize(config);

User.init(connection);

module.exports = connection;