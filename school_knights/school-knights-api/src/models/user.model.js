"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      first_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      last_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phone_number: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true
    }
  );
  User.associate = models => {};

  return User;
};
