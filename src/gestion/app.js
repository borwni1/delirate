// wiki.js - Wiki route module.

const express = require("express");

const router = express.Router();

const auth_router = require("./routes/auth.routes")

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', auth_router)

module.exports = app;