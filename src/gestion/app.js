// wiki.js - Wiki route module.

const express = require("express");

const authRoutes = require("./routes/api/auth.routes")
const userRoutes = require("./routes/api/user.routes")
// const webRoutes = require("./routes/web.routes")

const app = express();

const path = require("path")

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRoutes)

app.use("/api/me", userRoutes)

// app.use("/", webRoutes)

// app.use("/restaurant", restRoutes);

// app.use("/me", userRoutes);

module.exports = app;