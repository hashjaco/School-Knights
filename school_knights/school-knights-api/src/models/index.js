const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
let db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user.model")(sequelize, DataTypes);
db.schools = require("./school.model")(sequelize, DataTypes);
db.trips = require("./trip.model")(sequelize, DataTypes);
db.zones = require("./zone.model")(sequelize, DataTypes);

module.exports = db;
