"use strict";
const User = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    "Trip",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      knightID: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      origin: {
        allowNull: false,
        type: DataTypes.STRING
      },
      destination: {
        allowNull: false,
        type: DataTypes.STRING
      },
      completedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );
  Trip.associate = function(models) {
    // associations can be defined here
    Trip.belongsToMany(User, { through: "user_trips" });
  };
  return Trip;
};
