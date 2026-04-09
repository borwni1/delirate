const express = require("express");
const router = new express.Router();
const { register } = require("../controllers/auth.controller");
const path = require("path")

router.post("/register", register);

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "public", "register.html"))
})

module.exports = router;