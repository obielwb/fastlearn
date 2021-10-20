const { Model, DataTypes } = require('sequelize');

class Subscription extends Model {
  static init(sequelize) {
    super.init({
      user_id: DataTypes.INTEGER,
      community_id: DataTypes.INTEGER
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'user_id', as: 'user' });
    this.hasOne(models.Community, { foreignKey: 'community_id', as: 'community' });
  }
}

module.exports = Subscription;