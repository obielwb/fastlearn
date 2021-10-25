const { Model, DataTypes } = require('sequelize');

class Subscription extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.STRING, 
        primaryKey: true
      },
      user_id: DataTypes.INTEGER,
      community_id: DataTypes.INTEGER
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasOne(models.User, { foreignKey: 'id', as: 'user' });
    this.hasOne(models.Community, { foreignKey: 'id', as: 'community' });
  }
}

module.exports = Subscription;