'use strict';
const Woman = "Woman";
const Man = "Man";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_name: {
        type: Sequelize.STRING(27),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(45),
        allowNull: false
      },
      gender: {
        type: Sequelize.ENUM([Woman, Man]),
        unique: true,
        allowNull: false
      },
      tel_user: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      lat_user: {
        type: Sequelize.NUMERIC(15,2),
        allowNull: false
      },
      long_user: {
        type: Sequelize.NUMERIC(15,2),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      tel_certify: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      account: {
        type: Sequelize.INTEGER,
        unique: true,
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
    return queryInterface.dropTable('users');
  }
};