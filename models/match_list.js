'use strict';
const Deli = "Delivery";
const Pick = "Pick up";
const Yes = 'Yes';
const No = 'No';

module.exports = (sequelize, DataTypes) => {
  const match_list = sequelize.define('match_list', {
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
    matching_complete: {
      type: DataTypes.ENUM([Yes, No]),
      allowNull: false
    }
  });
  match_list.associate = function(models) {
    // associations can be defined here
  };
  return match_list;
};