const { Model, DataTypes } = require('sequelize');

class Community extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      icon: DataTypes.STRING,
      banner: DataTypes.STRING
    }, {
      sequelize
    });
  }

  static associate(models) {
    // this.belongsToMany(models.Subscription, { foreignKey: 'community_id', as: 'community' });
  }
}

module.exports = Community;