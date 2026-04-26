const express = require("express");
const router = new express.Router();
const path = require("path");
const { createRestaurant, editRestaurant } = require("../../controllers/restaurant.controller")
const { createRestaurantService, editRestaurantService } = require("../../services/restaurant.service")

const { authMiddleware } = require("../../middleware/auth.middleware")
const { requireRole } = require("../../middleware/role.middleware")

// TODO role ecrit en texte dans les fonctions : pas scalable

router.post("/create", authMiddleware, requireRole("OWNER"), createRestaurant /*, createRestaurantService*/);

router.post("/edit", authMiddleware, requireRole("OWNER"), editRestaurant /*, editRestaurantService */);

module.exports = router;