const express = require("express");
const router = new express.Router();
const user_controller = require("../controllers/user.controller");

// GET request for creating a User. NOTE This must come before routes that display User (uses id).
// router.get("/create", () => user_controller.user_create());
//
// // POST request for creating User.
router.post("/create", user_controller.user_create);

// DELETE request to delete User.
router.delete("/:id/delete", user_controller.user_delete);

// PUT request to update User.
router.put("/:id/update", user_controller.user_update);

// GET request for one User.
router.get("/:id", user_controller.user_by_id);

// GET request for list of all User items.
router.get("/", user_controller.user_retrieve_all);

module.exports = router;
