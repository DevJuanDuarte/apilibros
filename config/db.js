// config/db.js

const mysql = require("mysql");

// Configura la conexión a la base de datos
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sisloga1234",
  database: "biblioteca",
});

// Conecta a la base de datos
connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos: ", error);
    throw error; // Termina la aplicación en caso de error de conexión
  }
  console.log("Conexión a la base de datos exitosa.");
});

module.exports = connection;
