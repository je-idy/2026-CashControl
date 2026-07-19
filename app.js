const express = require("express");
const cors = require("cors");
require("dotenv").config();

const usuarioRoutes = require("./routes/usuarioRoutes");
const authRoutes = require("./routes/authRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const gastoRoutes = require("./routes/gastoRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API de CashControl"
    });
});

// Rutas
app.use("/api", usuarioRoutes);
app.use("/api", authRoutes);
app.use("/api", categoriaRoutes);
app.use("/api", gastoRoutes);

module.exports = app;