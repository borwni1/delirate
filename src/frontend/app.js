// wiki.js - Wiki route module.

const express = require("express");

const gestionWebRoutes = require("./routes/gestion.routes")
const restoAvisWebRoutes = require("./routes/resto-avis.routes")
const webRoutes = require("./routes/web.routes")

const app = express();

const path = require("path")

app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", gestionWebRoutes)
app.use("/", restoAvisWebRoutes)
app.use("/", webRoutes)

// app.use("/restaurant", restRoutes);

// app.use("/me", userRoutes);

module.exports = app;