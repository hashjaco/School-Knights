const { Sequelize } = require("sequelize");

let database = process.env.DB_NAME;
let user = process.env.DB_USER;
let password = process.env.PASS;
let host = process.env.DB_HOST;

module.exports = new Sequelize(database, user, password, {
  host: host,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});