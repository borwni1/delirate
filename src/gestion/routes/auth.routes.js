const express = require("express")
const router = new express.Router()


// import { validateUsername, validateEmail, validatePassword } from "../utils/validate-fields";

const validateUsername = require("../utils/validate-fields").validateUsername
const validateEmail = require("../utils/validate-fields").validateEmail
const validatePassword = require("../utils/validate-fields").validatePassword

router.get("/register", (req, res) => {
    res.send(`
    <form method="post" action="/api/auth/register">
    <label>username</label>
    <input name="username" type="text" />
    <label>email</label>
    <input name="email" type="text" />
    <label>password</label>
    <input name="password" type="text" />
    <input type="submit" text="submit" />
    `)
})

router.post("/register", (req, res) => {
    // Recuperer les champs (nom, email, mdp)
    try {
        // console.log(req)
        var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;

        if (!validateUsername(username)) {
            res.status(400).json({ message: "Invalid username"})
        } else if (!validateEmail(email)) {
            res.status(400).json({ message: "Invalid email"})
        } else if (!validatePassword(password)) {
            res.status(400).json({ message: "Invalid password"})
        }
    } catch (error) {
        console.error(error)
        res.status(400).json({ message: "An error occured when validating credentials"})
    }
    
    // Verifier existence dans bdd et insert
    register(req, res)
})

const { usernameExists } = require("../db/user");

async function register(req, res) {
    const { username } = req.body;
    if (await usernameExists(username)) {
        return res.status(400).json({ message: "Username already exists" });
    }

    if (await emailExists(email)) {
        return res.status(400).json({ message: "Email already linked to existing user" })
    }
    // Creation de la ligne postgresql et insertion dans la base de donnees
    // import { User } from "../models/User.js"
}

module.exports=router





// auth.routes.js
// POST /api/register → création de compte + token
// POST /api/login → retour token
// POST /api/logout → déconnexion
// POST /api/token/refresh → régénération token

// Raison : ce fichier gère tout ce qui touche authentification et tokens.