const pool = require('./index');

async function usernameExists(username) {
    const res = await pool.query("SELECT 1 FROM users WHERE username = $1", [username]);
    return res.rowCount > 0;
}

async function emailExists(email) {
    const res = await pool.query("SELECT 1 FROM users WHERE email = $1", [email]);
    return res.rowCount > 0;
}

async function userById(userId) {
    const res = await pool.query(
        `
        SELECT 
            u.id,
            u.username,
            u.email,
            u.role,
        FROM users u
        WHERE u.id = $1
        `,
        [userId]
    );

    return res;
}

async function editUser(userId, updates) {
    const allowedFields = ["username", "email", "role", "password"];

    // Regarder si le username est deja utilise (pareil pour l'adresse email)
    const verifQuery = `
    SELECT * FROM users WHERE id <> $1 AND (username = $2 OR email = $3)`

    if (updates.username || updates.email) {
        const checkValues = [
            userId,
            updates.username || null,
            updates.email || null
        ];

        const checkResult = await pool.query(verifQuery, checkValues);

        if (checkResult.rowCount > 0) {
            const error = new Error("Username or email already in use");
            error.status = 409
            throw error;
        }
    }


    const fields = [];
    const values = [];

    for (const [key, value] of Object.entries(updates)) {
        if (!allowedFields.includes(key)) continue;
        if (key == "password") {
            values.push(await bcrypt.hash(value, 10))
            fields.push(`${key} = $${values.length}`);
            continue
        }

        values.push(value);
        fields.push(`${key} = $${values.length}`);
    }

    if (fields.length === 0) {
        throw new Error("No valid fields to update");
    }

    const query = `
        UPDATE users
        SET ${fields.join(", ")}
        WHERE id = $${values.length + 1}
        RETURNING id, username, email
    `;

    values.push(userId);

    const result = await pool.query(query, values);

    return result.rows[0];
}

module.exports = { usernameExists, emailExists, userById, editUser, restaurantByUserId }