const { Model, DataTypes } = require('sequelize');

class PathPost extends Model {
  static init(sequelize) {
    super.init({
      path_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.Post, { foreignKey: 'post_id', as: 'post' });
    this.belongsTo(models.Path, { foreignKey: 'path_id', as: 'path' });
  }
}

module.exports = PathPost;