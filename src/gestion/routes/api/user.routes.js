// user.routes.js
// GET /api/me → consulter son profil
// POST /api/profile/edit → modifier son profil

// Raison : ce fichier gère tout ce qui touche l’utilisateur / son profil, après authentification.


const express = require("express");
const router = new express.Router();
const { register, login } = require("../../controllers/auth.controller");
const path = require("path");


// // Inscription utilisateur
// router.get("/register", (req, res) => {
//     res.sendFile(path.join(__dirname, "../", "public", "register.html"))
// });

// router.post("/register", register);

// // Connection utilisateur
// router.get("/login", (req, res) => {
//     res.sendFile(path.join(__dirname, "../", "public", "login.html"));
// });

// router.post("/login", login);

module.exports = router;