'use strict';
const Deli = "Delivery";
const Pick = "Pick up";
const Yes = 'Yes';
const No = 'No';

module.exports = (sequelize, DataTypes) => {
  const share_list = sequelize.define('share_list', {
    require_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    personal_fee: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    personal_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recv_way: {
      type: DataTypes.ENUM([Deli, Pick]),
      allowNull: false
    },
    payment_complete: {
      type: DataTypes.ENUM([Yes, No]),
      allowNull: false
    },
    sharing_complete: {
      type: DataTypes.ENUM([Yes, No]),
      allowNull: false
    }
  }, {});
  share_list.associate = function(models) {
    // associations can be defined here
  };
  return share_list;
};