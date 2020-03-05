"use strict";
const times = require("lodash.times");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "User",
      times(10, x => ({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone_number: faker.phone.phoneNumber()
      }))
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  }
};
