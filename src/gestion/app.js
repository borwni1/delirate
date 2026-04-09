// wiki.js - Wiki route module.

const express = require("express");

const authRoutes = require("./routes/auth.routes")

const app = express();

const path = require("path")

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRoutes)

module.exports = app;