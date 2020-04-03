const express = require("express");
const router = new express.Router();
const school_controller = require("../controllers/school.controller");

// GET request for creating a School. NOTE This must come before routes that display School (uses id).
// router.get("/create", () => school_controller.school_create());
//
// // POST request for creating School.
router.post("/create", school_controller.school_create);

// DELETE request to delete School.
router.delete("/:id/delete", school_controller.school_delete);

// PUT request to update School.
router.put("/:id/update", school_controller.school_update);

// GET request for one School.
router.get("/:id", school_controller.school_by_id);

// GET request for list of all School items.
router.get("/", school_controller.school_retrieve_all);

module.exports = router;
