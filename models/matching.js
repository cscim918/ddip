'use strict';
const Yes = 'Yes';
const No = 'No';
module.exports = (sequelize, DataTypes) => {
  const matching = sequelize.define('matching', {
    matching_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    matching_content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    individual_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_fee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupChat: {
      type: DataTypes.ENUM([Yes, No]),
      allowNull: false
    },
    matching_complete: {
      type: DataTypes.ENUM([Yes, No]),
      allowNull: false
    },
    matching_lat: {
      type: DataTypes.NUMERIC(15, 2),
      allowNull: false
    },
    matching_long: {
      type: DataTypes.NUMERIC(15, 2),
      allowNull: false
    }
  });
  matching.associate = function(models) {
    // associations can be defined here
  };
  return matching;
};