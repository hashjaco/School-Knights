'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Zones", [
      {
        firstName: "John",
        lastName: "Doe",
        email: "thedoeman@google.com",
        password: "dreamon",
        address: "5432 Connell Ct, Wager, CA, 95468",
        phoneNumber: "650-210-4636",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Jack",
        lastName: "Broganoff",
        email: "jackrabbit@google.com",
        password: "dragon",
        address: "5542 Crayon Ct, Pulley, NJ, 12432",
        phoneNumber: "650-240-4206",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Zones", null, {});

  }
};
