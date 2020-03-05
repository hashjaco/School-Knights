const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
// let fs = require("fs");
// let path = require("path");
// let env = process.env.NODE_ENV || "development";
let db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }


// fs.readdirSync(__dirname)
//   .filter(function(file) {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach(function(file) {
//     const model = sequelize["import"](path.join(__dirname, file));
//     db[model.name] = model;
//   });
//
// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user.model")(sequelize, DataTypes);
db.schools = require("./school.model")(sequelize, DataTypes);
db.trips = require("./trip.model")(sequelize, DataTypes);
db.zones = require("./zone.model")(sequelize, DataTypes);

module.exports = db;
