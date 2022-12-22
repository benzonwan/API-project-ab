'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.belongsTo(models.User, { foreignKey: 'ownerId' });
      Spot.hasMany(models.Booking, { foreignKey: 'spotId', onDelete:'cascade',hooks:true });
    }
  }
  Spot.init({
    ownerId: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lat: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [-90, 90],
        isNumeric: true
      }
    },
    lng: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [-180, 180],
        isDecimal: true
      },
    },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
    price: {
      type: DataTypes.DECIMAL,
      validate: {
        isDecimal: true
      },
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    avgRating: {
      type: DataTypes.DECIMAL,
      validate: {
        len: [1, 5],
        min: 1,
        max: 5,
        isNumeric: true
      }
    },
    previewImage: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};