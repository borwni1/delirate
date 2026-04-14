// Creer, modifier, supprimer restaurant
// Modification de la page web/menu, changer de proprietaire

const { resourceUsage } = require("node:process")
const { validateRestaurantName, validateRestaurantAddress } = require("../utils/validateFields")

// Ce fichier: controler les champs completes par l'utilisateur

// CREATE TABLE restaurants (
//     id SERIAL PRIMARY KEY,
//     name VARCHAR(100) NOT NULL,
//     owner_id INT REFERENCES users(id),
//     address TEXT,
//     created_at TIMESTAMP DEFAULT NOW()
// );

// Champs a prendre en compte:
// - Nom
// - Adresse



async function createRestaurant(req, res, next) {
    const { restaurantName, restaurantAddress } = req.body

    try {
        const validationError = validateRestaurantInformation(restaurantName, restaurantAddress);
        if (validationError) {
            return res.status(400).json({ message: validationError })
        }

        // Les strings suivent les conventions, on peut commencer relayer le travail au service, pour verifier l'unicite dans la db et inserer

        next();
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error.message })
    }
}

function validateRestaurantInformation(restaurantName, restaurantAddress) {
    if (!validateRestaurantName(restaurantName)) return "Invalid Restaurant Name";
    if (!validateRestaurantAddress(restaurantAddress)) return "Invalid Restaurant Address";
    return null;
}

module.exports = { createRestaurant }