const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { usernameExists, emailExists } = require("../db/user");
const pool = require("../db/index");


async function createRestaurantService(restaurantName, restaurantAddress) {

};

module.exports = { createRestaurantService };