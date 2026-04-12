// restaurant.routes.js
// POST /api/restaurant/create → création restaurant
// POST /api/restaurant/edit → modification restaurant

// Raison : ce fichier gère tout ce qui touche les restaurants, avec contrôle du rôle (OWNER) via middleware.

const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middleware/auth.middleware");
const requireRole = require("../../middleware/role.middleware");
const restaurantController = require("../../controllers/restaurant.controller");

// Il faut tester le code ci dessous:
// Si #{i} OK, Passer au #{i+1}

// router.get("/create", authMiddleware);

// router.get("/create", requireRole("USER"));

// router.get("/create", (req, res) => {
//     res.send({message: "CREATION D'UN RESTAURANT"});
// });

module.exports = router;