"use strict";

module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define(
    "Trip",
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
          references: {
            model: "User"
          }
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
    {
        freezeTableName: true
    }
  );
  Trip.associate = models => {
    // associations can be defined here
    // Trip.belongsToMany(models.users, { through: models.user_trips });
  };
  return Trip;
};
