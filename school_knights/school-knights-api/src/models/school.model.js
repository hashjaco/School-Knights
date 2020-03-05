"use strict";

module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define(
    "School",
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phone_number: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      primary_color: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      secondary_color: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    },
    {
        freezeTableName: true
    }
  );
  School.associate = models => {
    // associations can be defined here

  };
  return School;
};
