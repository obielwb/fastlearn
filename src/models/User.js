const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      username: DataTypes.STRING,
      avatar: DataTypes.BLOB,
    }, {
      sequelize
    });
  }

  static associate(models) {}
}

module.exports = User;