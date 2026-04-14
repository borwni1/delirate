const jwt = require("jsonwebtoken");
const pool = require("../db/index");
const { restaurantNameExists, restaurantAddressExists } = require("../db/restaurant")

async function createRestaurantService(ownerID, restaurantName, restaurantAddress) {
    // Verifier qu'il n'existe pas deja de restaurant avec ce nom + adresse
    try {
        // Pas 100% safe
        if (await restaurantNameExists(restaurantName)) {
            throw new Error("Restaurant name already exists")
        }

        if (await restaurantAddressExists(restaurantAddress)) {
            throw new Error("Restaurant address already exists")
        }

        const query = `
        INSERT INTO restaurants (name, address, owner_id)
        VALUES ($1, $2, $3)
        RETURNING id, name, address`

        const result = await pool.query(query, [restaurantName, restaurantAddress, ownerID])

        return result.rows[0];

    } catch (err) {
        console.error("Error creating restaurant:", err);
        throw new Error("Database error");
    }
}

async function editRestaurantService(ownerID, restaurantName, restaurantAddress) {
    // Verifier qu'il n'existe pas deja de restaurant avec ce nom + adresse
    try {
        // Pas 100% safe
        if (await restaurantNameExists(restaurantName)) {
            throw new Error("Restaurant name already exists")
        }

        if (await restaurantAddressExists(restaurantAddress)) {
            throw new Error("Restaurant address already exists")
        }

        
        const query = `
        UPDATE restaurants
        SET name = $1 AND address = $2
        WHERE owner_id = $3
        RETURNING id, name, address`

        const result = await pool.query(query, [restaurantName, restaurantAddress, ownerID])

        return result.rows[0];

    } catch (err) {
        console.error("Error creating restaurant:", err);
        throw new Error("Database error");
    }
}

module.exports = { createRestaurantService, editRestaurantService };