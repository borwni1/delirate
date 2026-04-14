const validateRestaurantName = function (restaurantName) {
    if (typeof restaurantName != "string") {
        return false;
    }

    const regex = /[a-zA-Z -]+/
    if (!regex.test(restaurantName)) {
        return false;
    }

    return true;
}

const validateRestaurantAddress = function (restaurantAddress) {
    if (typeof restaurantName != "string") {
        return false;
    }

    const regex = /[a-zA-Z -]+/
    if (!regex.test(restaurantAddress)) {
        return false;
    }

    return true;
}

module.exports = { validateRestaurantName, validateRestaurantAddress };