const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      votes: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Path, { foreignKey: 'path_id', as: 'path' });
  }
}

module.exports = Post;