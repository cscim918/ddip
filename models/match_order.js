'use strict';
module.exports = (sequelize, DataTypes) => {
  const match_order = sequelize.define('match_order', {
    order_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  match_order.associate = function(models) {
    // associations can be defined here
  };
  return match_order;
};