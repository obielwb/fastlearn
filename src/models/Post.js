const { Model, DataTypes } = require('sequelize');

class Post extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.STRING, 
        primaryKey: true
      },
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
    this.hasOne(models.User, { foreignKey: 'id', as: 'user' });
    this.hasMany(models.Path, { foreignKey: 'post_id', as: 'path' });
  }
}

module.exports = Post;