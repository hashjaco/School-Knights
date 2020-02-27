require("module-alias/register");
const createError = require("http-errors");
const express = require("express");
const debug = require("debug")("express-sequelize");
const bcrypt = require("bcryptjs");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db/config/db");

require("custom-env").env("localhost");
require("dotenv").config();

const indexRouter = require("./src/apps/api/routes");
const usersRouter = require("./src/apps/api/routes/UserRoutes");
const zonesRouter = require("./src/apps/api/routes/ZoneRoutes");
const schoolsRouter = require("./src/apps/api/routes/SchoolRoutes");
const tripsRouter = require("./src/apps/api/routes/TripRoutes");

const port = normalizePort(process.env.API_PORT || "8080");

const server = express();

// Add middleware
server.use(cors());
server.use(helmet());

server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

// Add Routes
server.use("/", indexRouter);
server.use("/users", usersRouter);
server.use("/zones", zonesRouter);
server.use("/schools", schoolsRouter);
server.use("/trips", tripsRouter);

server.set("models", require("./db/models"));

// catch 404 and forward to error handler
server.use((req, res, next) => {
  next(createError(404));
});

// error handler
server.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.server.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

// Test the database
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch(err => console.log("Database connection failed: ", err));

// Helper function to normalize port variable
function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// Start server
server.listen(port, () => {
  console.log(`API now running on port ${port}`);
});

module.exports = server;
