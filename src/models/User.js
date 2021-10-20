const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      avatar: DataTypes.STRING
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsToMany(models.Subscription, { foreignKey: 'user_id', as: 'subscription' });
    this.hasMany(models.Post, { foreignKey: 'user_id', as: 'post' });
  }
}

module.exports = User;