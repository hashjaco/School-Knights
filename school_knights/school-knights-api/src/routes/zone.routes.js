const express = require("express");
const router = new express.Router();
const zone_controller = require("../controllers/zone.controller");

// GET request for creating a Zone. NOTE This must come before routes that display Zone (uses id).
// router.get("/create", () => zone_controller.zone_create());
//
// // POST request for creating Zone.
router.post("/create", zone_controller.zone_create);

// DELETE request to delete Zone.
router.delete("/:id/delete", zone_controller.zone_delete);

// PUT request to update Zone.
router.put("/:id/update", zone_controller.zone_update);

// GET request for one Zone.
router.get("/:id", zone_controller.zone_by_id);

// GET request for list of all Zone items.
router.get("/", zone_controller.zone_retrieve_all);

module.exports = router;
