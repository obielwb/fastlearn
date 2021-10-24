const { Model, DataTypes } = require('sequelize');

class Comment extends Model {
  static init(sequelize) {
    super.init({
      post_id: DataTypes.INTEGER,
      content: DataTypes.STRING,
      user_id: DataTypes.INTEGER
    }, {
      sequelize
    });
  }

  static associate(models) {}
}

module.exports = Comment;