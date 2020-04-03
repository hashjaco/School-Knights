"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Display list of all Users.
exports.user_retrieve_all = async (req, res, next) => {
  await User.findAll()
    .then(result => res.send(result))
    .catch(err => {
      console.dir(err);
      res.sendStatus(500);
    });
  next();
};

// Display detail page for a specific User.
exports.user_by_id = async (req, res, next) => {
  const id = req.params.id;
  await User.findByPk(id)
    .then(result => res.send(result))
    .catch(err => {
      res.sendStatus(500);
      console.dir(err);
    });
  next();
};

// Create user on GET/POST
exports.user_create = async (req, res, next) => {
  // Validate request
  if (!req.body.firstName) {
    res.sendStatus(400);
    return;
  }
  // Define user from parameters
  const user = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hash(req.body.password, saltRounds),
    address: req.body.address,
    phone_number: req.body.phoneNumber
  };

  // Create user
  await User.create(user)
    .then(result => {
      res.send(result);
      res.sendStatus(200);
    })
    .catch(err => {
      console.dir(err);
      res.sendStatus(404);
    });
  next();
};

// Handle User delete on delete.
exports.user_delete = async (req, res, next) => {
  const id = req.params.userId;

  await User.destroy({
    where: { id: id }
  })
    .then(num => {
      num === 1
        ? res.sendStatus(200)
        : res.sendStatus(500).send(`Cannot delete User with id ${id}.`);
    })
    .catch(err => {
      console.dir(err);
    });
};

// Display User update form on PUT.
exports.user_update = async (req, res, next) => {
  const id = req.params.userId;

  await User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      num === 1
        ? res.sendStatus(200).send(`User with id: ${id} successfully updated.`)
        : res.sendStatus(500).send(`User with id: ${id} was not found.`);
    })
    .catch(err =>
      res.sendStatus(500).send(`Could not update user with id: ${id}.`)
    );
};
