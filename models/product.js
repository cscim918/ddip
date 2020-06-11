'use strict';
const Yes = "Yes";
const No = "No";
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
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
    product_description:{
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
    }

  });
  // product.associate = function(models) {
  //   product.belongsTo(models.market, {
  //     foreignKey: "market_id"
  //   })
  // };
  return product;
};