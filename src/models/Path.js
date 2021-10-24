const { Model, DataTypes } = require('sequelize');

class Path extends Model {
  static init(sequelize) {
    super.init({
      path_id: DataTypes.INTEGER,
      post_id: DataTypes.INTEGER,
      community_id: DataTypes.INTEGER
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.Post, { foreignKey: 'post_id', as: 'post' });
    this.belongsTo(models.Community, { foreignKey: 'community_id', as: 'community' });
  }
}

module.exports = Path;