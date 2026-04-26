const pool = require('./index');

async function restaurantNameExists(restaurantName) {
    const res = await pool.query("SELECT 1 FROM restaurants WHERE name = $1", [restaurantName])
    return res.rowCount > 0;
}

async function restaurantAddressExists(restaurantAddress) {
    const res = await pool.query("SELECT 1 FROM restaurants WHERE address = $1", [restaurantAddress])
    return res.rowCount > 0;
}

module.exports = { restaurantNameExists, restaurantAddressExists }