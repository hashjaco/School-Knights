const express = require("express");
const router = new express.Router();
const trip_controller = require("../controllers/trip.controller");

// GET request for creating a Trip. NOTE This must come before routes that display Trip (uses id).
// router.get("/create", () => trip_controller.trip_create());
//
// // POST request for creating Trip.
router.post("/create", trip_controller.trip_create);

// DELETE request to delete Trip.
router.delete("/:id/delete", trip_controller.trip_delete);

// PUT request to update Trip.
router.put("/:id/update", trip_controller.trip_update);

// GET request for one Trip.
router.get("/:id", trip_controller.trip_by_id);

// GET request for list of all Trip items.
router.get("/", trip_controller.trip_retrieve_all);

module.exports = router;
