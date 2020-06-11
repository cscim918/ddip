'use strict';
module.exports = (sequelize, DataTypes) => {
  const match_chat = sequelize.define('match_chat', {
    message: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {});
  match_chat.associate = function(models) {
    // associations can be defined here
  };
  return match_chat;
};