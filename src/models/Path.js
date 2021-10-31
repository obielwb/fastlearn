const { Model, DataTypes } = require('sequelize');

class Path extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.PathPost, { foreignKey: 'id', as: 'path_post' });
  }
}

module.exports = Path;