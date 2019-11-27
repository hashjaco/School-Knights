const createError = require('http-errors');
const express = require('express');
const bcrypt = require('bcryptjs');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const zonesRouter = require('./routes/zones');
const schoolsRouter = require('./routes/schools');
const knightsRouter = require('./routes/knights');
const tripsRouter = require('./routes/trips');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors())

app.use(helmet())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/zones', zonesRouter);
app.use('/knights', knightsRouter);
app.use('/schools', schoolsRouter);
app.use('/trips', tripsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`api is running on port ${PORT}`)
})

module.exports = app;
