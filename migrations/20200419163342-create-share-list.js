'use strict';
const Deli = "Delivery";
const Pick = "Pick up";
const Yes = 'Yes';
const No = 'No';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('share_lists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      require_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      personal_fee: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      personal_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      recv_way: {
        type: Sequelize.ENUM([Deli, Pick]),
        allowNull: false
      },
      payment_complete: {
        type: Sequelize.ENUM([Yes, No]),
        allowNull: false
      },
      sharing_complete: {
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
    return queryInterface.dropTable('share_lists');
  }
};