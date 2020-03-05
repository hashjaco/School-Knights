require("module-alias/register");
const express = require("express");
const router = new express.Router();
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");

// require("./src/models");
require("custom-env").env("localhost");
require("dotenv").config();

const db = require("./src/models");

const indexRouter = require("./src/routes");
const usersRouter = require("./src/routes/user.routes");
const zonesRouter = require("./src/routes/zone.routes");
const schoolsRouter = require("./src/routes/school.routes");
const tripsRouter = require("./src/routes/trip.routes");

const port = normalizePort(process.env.API_PORT || "8080");

const server = express();

// Add middleware
server.use(cors());
server.use(helmet());

server.use(logger("dev"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(router);

server.set("view engine", "ejs");

// Add Routes
server.use("/", indexRouter);
server.use("/users", usersRouter);
server.use("/zones", zonesRouter);
server.use("/schools", schoolsRouter);
server.use("/trips", tripsRouter);

server.set("models", require("./src/models"));

// catch 404 and forward to error handler
server.use((req, res, next) => {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: server.get("env") === "development" ? err : {}
  });
});

// Test the database
// db.sequelize
//   .authenticate()
//   .then(() => console.log("Database connected"))
//   .catch(err => console.log("Database connection failed: ", err));

// sync database and insert dummy data to test with
db.sequelize.sync({ force: true }).then(() => {
  seedUsers(db);
  //   db.users.bulkCreate(
  //   times(10, x => ({
  //     id: x,
  //     first_name: faker.name.firstName(),
  //     last_name: faker.name.lastName(),
  //     address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //     phone_number: faker.phone.phoneNumber()
  //   }))
  // );
  // Start server
  startServer(server, port);
});

// Helper function to normalize port variable
function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

// Start server
function startServer(server, port) {
  server.listen(port, () => {
    console.log(`API running on port ${port}`);
  });
}

// Create N number of fake users for testing
function seedUsers(database) {
  database.users.bulkCreate(
    times(10, x => ({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      address: `${faker.address.streetAddress()} ${faker.address.city()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`,
      email: faker.internet.email(),
      password: faker.internet.password(),
      phone_number: faker.phone.phoneNumber()
    }))
  );
}

module.exports = server;
