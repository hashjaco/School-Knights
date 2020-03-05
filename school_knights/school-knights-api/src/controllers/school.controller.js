"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../models");
const School = db.schools;
const Op = db.Sequelize.Op;

// Display list of all Schools.
exports.school_retrieve_all = async (req, res, next) => {
    await School.findAll()
        .then(result => res.send(result))
        .catch(err => {
            console.dir(err);
            res.sendStatus(500);
        });
    next();
};

// Display detail page for a specific School.
exports.school_by_id = async (req, res, next) => {
    const id = req.params.id;
    await School.findByPk(id)
        .then(result => res.send(result))
        .catch(err => {
            res.sendStatus(500);
            console.dir(err);
        });
    next();
};

// Create school on GET/POST
exports.school_create = async (req, res, next) => {
    // Validate request
    if (!req.body.firstName) {
        res.sendStatus(400);
        return;
    }
    // Define school from parameters
    const school = {
        name: req.body.name,
        password: bcrypt.hash(req.body.password, saltRounds),
        address: req.body.address,
        phone_number: req.body.phoneNumber
    };

    // Create school
    await School.create(school)
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

// Handle School delete on delete.
exports.school_delete = async (req, res, next) => {
    const id = req.params.schoolId;

    await School.destroy({
        where: { id: id }
    })
        .then(num => {
            num === 1
                ? res.sendStatus(200)
                : res.sendStatus(500).send(`Cannot delete School with id ${id}.`);
        })
        .catch(err => {
            console.dir(err);
        });
};

// Display School update form on PUT.
exports.school_update = async (req, res, next) => {
    const id = req.params.schoolId;

    await School.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            num === 1
                ? res.sendStatus(200).send(`School with id: ${id} successfully updated.`)
                : res.sendStatus(500).send(`School with id: ${id} was not found.`);
        })
        .catch(err =>
            res.sendStatus(500).send(`Could not update school with id: ${id}.`)
        );
};
