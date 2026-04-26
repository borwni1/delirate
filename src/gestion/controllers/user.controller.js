const { usernameExists, userById, editUser } = require("../db/user");
const { validateUsername, validateEmail, validatePassword, validateRole } = require("../utils/validate-fields")

async function me(req, res) {
    try {
        const user = (await userById(req.user.id)).rows[0];
        
        res.status(200).json({
            username: user.username,
            role: user.role,
            email: user.email,
            availableRoles: ["USER", "GUIDE", "OWNER"],
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Internal server error" })
    }
}

async function editMe(req, res, next) {
    try {
        const userId = req.user.id;
        const updates = req.body; // il faut valider les champs a mettre a jour

        const { username, email, password, role } = updates;

        if (!["USER", "GUIDE", "OWNER"].includes(role)) {
            return res.status(400).json({ message: "Wrong role" })
        }

        const validationError = validateUserCredentials(username, email, password, role);
        if (validationError) {
            return res.status(400).json({ message: validationError })
        }
        
        const updatedUser = await editUser(userId, updates);

        return res.status(200).json({ message: "Applied modifications successfully", data: updatedUser });
    } catch (error) {
        console.error(error.message)
        return res.status(400).json({ message: (error.status ? error.message : "Internal server error") })
    }
}

function validateUserCredentials(username, email, password, role) {
    if (username && !validateUsername(username)) return "Invalid username"
    if (email && !validateEmail(email)) return "Invalid email"
    if (password && !validatePassword(password)) return "Invalid password"
    if (role && !validateRole(role)) return "Invalid role"
    return null;
}

module.exports = { me, editMe }