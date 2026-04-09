const { registerUser, loginUser } = require("../services/auth.service")
const { validateUsername, validateEmail, validatePassword } = require("../utils/validate-fields")

async function register(req, res) {
    const { username, email, password } = req.body;

    try {
        const validationError = validateUserCredentials(username, email, password);
        if (validationError) {
            return res.status(400).json({ message: "validationError"})
        }

        const { token, user } = await registerUser(username, email, password);

        res.status(201).json({ token, user});
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "Internal server error", error: error.message })
    }
}

function validateUserCredentials(username, email, password) {
    if (!validateUsername(username)) return "Invalid username"
    if (!validateEmail(email)) return "Invalid email"
    if (!validatePassword(password)) return "Invalid password"
    return null;
}

module.exports = {register}