'use strict';
const Yes = 'Yes';
const No = 'No';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('matchings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matching_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      matching_content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      individual_price: {
        type: Sequelize.INTEGER,
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
      matching_complete: {
        type: Sequelize.ENUM([Yes, No]),
        allowNull: false
      },
      matching_lat: {
        type: Sequelize.NUMERIC(15, 2),
        allowNull: false
      },
      matching_long: {
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
    return queryInterface.dropTable('matchings');
  }
};