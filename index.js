const express = require("express"),
  cors = require("cors");
const { databaseConnection } = require("./database/database-config");
require("dotenv").config(); //
// Crear el servidor de Express
const app = express();

// Base de datos
databaseConnection();

// Cors 
app.use(cors());

// Directorio Publico 
app.use(express.static("public")); // aqui se configura la ruta del proyecto que muestra la aplicacion web

// Lectura y parseo del body 
// DEBE IR ANTES QUE LA LECTURA DE RUTAS
app.use(express.json());

// Rutas 
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// Escuchar peticiones 
app.listen(process.env.PORT, () => {
  console.log("Server running on process.env.PORT " + process.env.PORT);
});
