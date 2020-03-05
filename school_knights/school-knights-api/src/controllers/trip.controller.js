"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../models");
const Trip = db.trips;
const Op = db.Sequelize.Op;

// Display list of all Trips.
exports.trip_retrieve_all = async (req, res, next) => {
    await Trip.findAll()
        .then(result => res.send(result))
        .catch(err => {
            console.dir(err);
            res.sendStatus(500);
        });
    next();
};

// Display detail page for a specific Trip.
exports.trip_by_id = async (req, res, next) => {
    const id = req.params.id;
    await Trip.findByPk(id)
        .then(result => res.send(result))
        .catch(err => {
            res.sendStatus(500);
            console.dir(err);
        });
    next();
};

// Create trip on GET/POST
exports.trip_create = async (req, res, next) => {
    // Validate request
    if (!req.body.firstName) {
        res.sendStatus(400);
        return;
    }
    // Define trip from parameters
    const trip = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hash(req.body.password, saltRounds),
        address: req.body.address,
        phone_number: req.body.phoneNumber
    };

    // Create trip
    await Trip.create(trip)
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

// Handle Trip delete on delete.
exports.trip_delete = async (req, res, next) => {
    const id = req.params.tripId;

    await Trip.destroy({
        where: { id: id }
    })
        .then(num => {
            num === 1
                ? res.sendStatus(200)
                : res.sendStatus(500).send(`Cannot delete Trip with id ${id}.`);
        })
        .catch(err => {
            console.dir(err);
        });
};

// Display Trip update form on PUT.
exports.trip_update = async (req, res, next) => {
    const id = req.params.tripId;

    await Trip.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            num === 1
                ? res.sendStatus(200).send(`Trip with id: ${id} successfully updated.`)
                : res.sendStatus(500).send(`Trip with id: ${id} was not found.`);
        })
        .catch(err =>
            res.sendStatus(500).send(`Could not update trip with id: ${id}.`)
        );
};
