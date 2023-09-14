const connection = require("../config/db"); // Importa la conexión a la base de datos desde db.js

// Manejar la solicitud GET para obtener todos los libros
exports.obtenerLibros = (req, res) => {
  // Realiza una consulta SQL para seleccionar todos los registros de la tabla libros
  const sql = "SELECT * FROM libros LIMIT 10;";

  connection.query(sql, (error, resultados) => {
    if (error) {
      console.error("Error al consultar la base de datos: ", error);
      res.status(500).json({ error: "Error al consultar la base de datos" });
      return;
    }

    // Devuelve los resultados en formato JSON
    res.json(resultados);
  });
};
