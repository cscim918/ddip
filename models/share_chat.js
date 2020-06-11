'use strict';
module.exports = (sequelize, DataTypes) => {
  const share_chat = sequelize.define('share_chat', {
    message: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {});
  share_chat.associate = function(models) {
    // associations can be defined here
  };
  return share_chat;
};