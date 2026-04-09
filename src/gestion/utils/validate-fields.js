const validateUsername = function(username) {
    if (typeof username !== "string") {
        return false;
    }
    if (username.length === 0 || username.length > 32) {
        return false;
    }
    const regex = /^[a-zA-Z0-9]+$/; // autoriser uniquement les caractères alphanumériques
    if (!regex.test(username)) {
        return false;
    }
    return true;
}

const validateEmail = function(email) {
    if (typeof email !== "string") {
        return false;
    }
    if (email.length === 0 || email.length > 254) {
        return false;
    }
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // check email laxe
    if (!regex.test(email)) {
        return false;
    }
    return true;
}

const validatePassword = function(password) {
    if (typeof password !== "string") {
        return false;
    }
    if (password.length < 16 || password.length > 254) {
        return false;
    }
    const _regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{16,254}$/;
    const regex = /.*/;
    if (!regex.test(password)) {
        return false;
    }
    return true;
}

module.exports = { validateUsername, validateEmail, validatePassword }