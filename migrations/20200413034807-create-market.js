'use strict';
const Delivery="Delivery"
const Direct = "Direct Receipt"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('markets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      market_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      tel_market: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      deli_market: {
        type: Sequelize.ENUM([Delivery, Direct]),
        allowNull: false,
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
    return queryInterface.dropTable('markets');
  }
};