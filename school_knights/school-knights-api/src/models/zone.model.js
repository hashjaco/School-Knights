"use strict";

module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define(
    "Zone",
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING
      },
      x_coordinates: {
        allowNull: false,
        type: DataTypes.STRING
      },
      y_coordinates: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );
  Zone.associate = models => {
    // Fill with associations
  };
  return Zone;
};
