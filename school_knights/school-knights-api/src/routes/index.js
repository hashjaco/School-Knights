const express = require("express");
const chalk = require("chalk");
const router = new express.Router();


router.get("/", (req, res, next) => {
  res.send(
    `Welcome to the School Knights API!\n Time: ${Date.now()}`
  );
  next();
});


module.exports = router;
