'use strict';
module.exports = (sequelize, DataTypes) => {
  const sharing_member = sequelize.define('sharing_member', {
  }, {});
  sharing_member.associate = function(models) {
    // associations can be defined here
  };
  return sharing_member;
};