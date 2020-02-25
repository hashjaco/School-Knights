const { Sequelize } = require("sequelize");

let database = process.env.DB_NAME;
let user = process.env.DB_USER;
let password = process.env.PASS;
let host = process.env.DB_HOST;

let sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

let models = [
    'School',
    'User',
    'Trip',
    'Zone'
];

models.forEach( model => {
  module.exports[model] = sequelize.import(`${__dirname}/${model}`)
});

// table relations go here
((model) => {

})