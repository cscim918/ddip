'use strict';
const Yes = 'Yes';
const No = 'No';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sharings', {
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
      product_img:{
        type: Sequelize.JSONB,
        allowNull: false
      },
      product_onlyWoman: {
        type: Sequelize.ENUM([Yes, No]),
        allowNull: false
      },
      sharing_content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      total_fee: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      product_stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      groupChat: {
        type: Sequelize.ENUM([Yes, No]),
        allowNull: false
      },
      sharing_complete: {
        type: Sequelize.ENUM([Yes, No]),
        allowNull: false
      },
      sharing_lat: {
        type: Sequelize.NUMERIC(15, 2),
        allowNull: false
      },
      sharing_long: {
        type: Sequelize.NUMERIC(15, 2),
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
    return queryInterface.dropTable('sharings');
  }
};