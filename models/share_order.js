'use strict';
module.exports = (sequelize, DataTypes) => {
  const share_order = sequelize.define('share_order', {
    order_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  share_order.associate = function(models) {
    // associations can be defined here
  };
  return share_order;
};