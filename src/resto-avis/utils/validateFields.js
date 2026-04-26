const validateRestaurantName = function (restaurantName) {
    if (typeof restaurantName !== "string") {
        return false;
    }

    const regex = /^[a-zA-Z -]+$/;

    return regex.test(restaurantName);
};

const validateRestaurantAddress = function (restaurantAddress) {
    if (typeof restaurantAddress !== "string") {
        return false;
    }

    const regex = /^[a-zA-Z0-9\s,'-]+$/;

    return regex.test(restaurantAddress);
};

module.exports = { validateRestaurantName, validateRestaurantAddress };