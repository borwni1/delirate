// wiki.js - Wiki route module.

const express = require("express");

const webRoutes = require("./routes/web.routes")

const restaurantRoutes = require("./routes/api/restaurant.routes")

const app = express();

const path = require("path")

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", restaurantRoutes)

app.use("/", webRoutes)

module.exports = app;