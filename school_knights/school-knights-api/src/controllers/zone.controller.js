"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../models");
const Zone = db.zones;
const Op = db.Sequelize.Op;

// Display list of all Zones.
exports.zone_retrieve_all = async (req, res, next) => {
    await Zone.findAll()
        .then(result => res.send(result))
        .catch(err => {
            console.dir(err);
            res.sendStatus(500);
        });
    next();
};

// Display detail page for a specific Zone.
exports.zone_by_id = async (req, res, next) => {
    const id = req.params.id;
    await Zone.findByPk(id)
        .then(result => res.send(result))
        .catch(err => {
            res.sendStatus(500);
            console.dir(err);
        });
    next();
};

// Create zone on GET/POST
exports.zone_create = async (req, res, next) => {
    // Validate request
    if (!req.body.firstName) {
        res.sendStatus(400);
        return;
    }
    // Define zone from parameters
    const zone = {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hash(req.body.password, saltRounds),
        address: req.body.address,
        phone_number: req.body.phoneNumber
    };

    // Create zone
    await Zone.create(zone)
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

// Handle Zone delete on delete.
exports.zone_delete = async (req, res, next) => {
    const id = req.params.zoneId;

    await Zone.destroy({
        where: { id: id }
    })
        .then(num => {
            num === 1
                ? res.sendStatus(200)
                : res.sendStatus(500).send(`Cannot delete Zone with id ${id}.`);
        })
        .catch(err => {
            console.dir(err);
        });
};

// Display Zone update form on PUT.
exports.zone_update = async (req, res, next) => {
    const id = req.params.zoneId;

    await Zone.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            num === 1
                ? res.sendStatus(200).send(`Zone with id: ${id} successfully updated.`)
                : res.sendStatus(500).send(`Zone with id: ${id} was not found.`);
        })
        .catch(err =>
            res.sendStatus(500).send(`Could not update zone with id: ${id}.`)
        );
};
