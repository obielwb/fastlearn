const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
        },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar: DataTypes.BLOB,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    // this.hasMany(models.Subscription, { foreignKey: 'user_id', as: 'subscription' });
    // this.hasMany(models.Post, { foreignKey: 'user_id', as: 'post' });
  }
}

module.exports = User;
