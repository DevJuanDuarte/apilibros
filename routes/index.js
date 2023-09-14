var express = require("express");
var router = express.Router();
var librosController = require("../controllers/librosControllers");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET lista de libros en formato JSON. */
router.get("/libros", librosController.obtenerLibros);

module.exports = router;
