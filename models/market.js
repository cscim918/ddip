'use strict';
const Delivery="Delivery"
const Direct = "Direct"
module.exports = (sequelize, DataTypes) => {
  const market = sequelize.define('market', {
    market_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel_market: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deli_market: {
      type: DataTypes.ENUM([Delivery, Direct]),
      allowNull: false,
    }
  });
  // market.associate = function(models) {
  //   market.hasMany(models.product);
  // };
  return market;
};