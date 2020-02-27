'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    xCoordinates: {
      allowNull: false,
      type: DataTypes.STRING
    },
    yCoordinates: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Zone.associate = function(models) {
    // associations can be defined here
  };
  return Zone;
};