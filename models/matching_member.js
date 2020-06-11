'use strict';
module.exports = (sequelize, DataTypes) => {
  const matching_member = sequelize.define('matching_member', {
  }, {});
  matching_member.associate = function(models) {
    // associations can be defined here
  };
  return matching_member;
};