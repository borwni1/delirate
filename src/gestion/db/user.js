const pool = require('./index');

// const users = pool.query("\\c gestion")

async function usernameExists(username) {
    const res = await pool.query('SELECT 1 FROM users WHERE username = $1', [username]);
    return res.rowCount > 0;
}

async function emailExists(email) {
    const res = await pool.query('SELECT 1 FROM users WHERE email = $1', [email]);
    return res.rowCount > 0;
}

module.exports = { usernameExists, emailExists }