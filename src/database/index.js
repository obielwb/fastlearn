const Sequelize = require('sequelize');

const Comments = require('../models/Comment');
const Community = require('../models/Community');
const Path = require('../models/Path');
const PathPost = require('../models/PathPost');
const Post = require('../models/Post');
const Subscription = require('../models/Subscription');
const User = require('../models/User');

const config = require('../config/database');

const models = [Comments, Community, Path, PathPost, Post, Subscription, User];

class DataBase {
  constructor() {
    this.init();
  }
  
  init() {
    const connection = new Sequelize(config);

    models.map((model) => model.init(connection));
    models.map((model) => model.associate(connection.models));
  }
}

module.exports = new DataBase();