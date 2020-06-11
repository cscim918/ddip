'use strict';
const Yes = 'Yes';
const No = 'No';
module.exports = (sequelize, DataTypes) => {
  const sharing = sequelize.define('sharing', {
    sharing_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_img:{
      type: DataTypes.JSONB,
      allowNull: false
    },
    product_onlyWoman: {
      type: DataTypes.ENUM([Yes, No]),
      allowNull: false
    },
    sharing_content: {
      type: DataTypes.STRING,
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
    sharing_complete: {
      type: DataTypes.ENUM([Yes, No]),
      allowNull: false
    },
    sharing_lat: {
      type: DataTypes.NUMERIC(15, 2),
      allowNull: false
    },
    sharing_long: {
      type: DataTypes.NUMERIC(15, 2),
      allowNull: false
    }
  }, {});
  sharing.associate = function(models) {
    // associations can be defined here
  };
  return sharing;
};