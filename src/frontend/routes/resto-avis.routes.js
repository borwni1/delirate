const express = require("express");
const router = new express.Router();
const path = require("path");

router.get("/restaurants", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "public", "resto-avis", "index.html"))
})

module.exports = router;