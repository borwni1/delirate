const express = require("express");
const router = new express.Router();
const { register, login } = require("../../controllers/auth.controller");
const path = require("path");

router.post("/register", register);

router.post("/login", login);

module.exports = router;