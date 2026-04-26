const { createRestaurantService, editRestaurantService } = require("../services/restaurant.service");
const { validateRestaurantName, validateRestaurantAddress } = require("../utils/validateFields")

async function createRestaurant(req, res) {

    const { restaurantName, restaurantAddress } = req.body
    const { id } = req.user // parce qu'on decode le token et on le met dans `req.user`

    try {
        const validationError = validateRestaurantInformation(restaurantName, restaurantAddress);
        if (validationError) {
            return res.status(400).json({ message: validationError })
        }

        const restaurant = await createRestaurantService(id, restaurantName, restaurantAddress)

        // TODO Renvoie restaurant mais je sais pas pour quoi faire, a voir plus tard
        return res.status(201).json({ message: "Successfully created the restaurant", restaurant: restaurant })
    } catch (error) {
        console.error(error)
        return res.status(400).json({ message: error.message })
    }
}

async function editRestaurant(req, res) {
    const { restaurantName, restaurantAddress } = req.body
    const { id } = req.user;

    try {
        const validationError = !validateRestaurantInformation(restaurantName, restaurantAddress)
        if (validationError) {
            return res.status(400).json({ message: validationError })
        }

        const restaurant = editRestaurantService(restaurantName, restaurantAddress)
        
        return res.status(201).json({ message: "Successfully updated the restaurant", restaurant: restaurant })
    } catch (error) {
        // TODO Pas safe de renvoyer error.message: exposition du backend
        console.error(error);
        return res.status(400).json({ message: error.message })
    }
}

function validateRestaurantInformation(restaurantName, restaurantAddress) {
    if (!validateRestaurantName(restaurantName)) return "Invalid Restaurant Name";
    if (!validateRestaurantAddress(restaurantAddress)) return "Invalid Restaurant Address";
    return null;
}

module.exports = { createRestaurant, editRestaurant }