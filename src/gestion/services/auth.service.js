const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { usernameExists, emailExists } = require("../db/user");
const pool = require("../db/index");

async function registerUser(username, email, password) {
    try {
        if (await usernameExists(username)) {
            throw new Error("Username already exists");
        }
        if (await emailExists(email)) {
            throw new Error("Email already linked to an existing user");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const insertQuery = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, username, email
        `;
        const result = await pool.query(insertQuery, [username, email, hashedPassword]);

        const user = result.rows[0];

        const token = jwt.sign({ id: user.id, username: user.username }, "your_jwt_secret", { expiresIn: "1h" });

        return { token, user };
    } catch (error) {
        throw error;
    }
}

module.exports = { registerUser };