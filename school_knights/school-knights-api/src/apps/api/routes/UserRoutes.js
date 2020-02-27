var express = require("express");
var router = express.Router();
const path = require("path");
const User = require("@models/user");

/* GET users listing. */
router.get("/", (req, res, next) => {
  User.findAll()
      .then(users => {
        console.log(users)
        res.sendStatus(200)
      })
      .catch(err=> console.log(err));
});

router.post("/:information", (req, res, next) => {});

router.put("/:id/:information", (req, res, next) => {});

router.delete("/:id", (req, res, next) => {});

// when a random route is inputed
router.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to this API."
  })
);

module.exports = router;
