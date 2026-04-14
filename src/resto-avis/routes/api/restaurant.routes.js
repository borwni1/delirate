const express = require("express");
const router = new express.Router();
const path = require("path");

const { authMiddleware } = require("../middleware/auth.middleware")

router.post("/restaurant/create", authMiddleware, register);

module.exports = router;