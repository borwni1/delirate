const express = require("express");
const router = new express.Router();
const path = require("path");

router.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "public", "gestion", "dashboard.html"))
})

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "public", "gestion", "login.html"))
})

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "public", "gestion", "register.html"))
})

router.get("/settings", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "public", "gestion", "settings.html"))
})

module.exports = router;