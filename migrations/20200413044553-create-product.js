'use strict';
const Yes = "Woman's item";
const No = "Available to anyone";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      product_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      product_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      product_category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      product_description:{
        type: Sequelize.STRING,
        allowNull: false
      },
      product_img:{
        type: Sequelize.JSONB,
        allowNull: false
      },
      product_onlyWoman: {
        type: Sequelize.ENUM([Yes, No]),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};