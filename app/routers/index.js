const express = require('express');
const router = express.Router();
const _usuariosController = require('../controllers/Usuarios/Usuarios.controller');
const _entradasController = require("../controllers/Entradas/Entradas.Controller");
const _examenesController = require("../controllers/Examenes/Examenes.controller");
const _authController = require("../controllers/Usuarios/auth.controller");


// RUTAS PUBLICAS
// Rutas no necesitan un token
router.post("/login", _authController.getUserLogin);

//REGISTRO DEL MIDDLEWARE
router.use([_authController.verifyTokenMiddleware]);
// RUTAS PRIVADAS
router
  // Descrifrar y verificar token
  .get("/verify", _authController.verifyToken)
  //CRUD USUARIOS
  .get('/usuarios', _usuariosController.getUsuarios)
  .get('/usuario', _usuariosController.getUsuario)
  .post('/', _usuariosController.createUsuario);

  //CRUD ENTRADAS
  router
    .get('/entradas', _entradasController.getEntradas)
    .get('/entrada', _entradasController.getEntrada)
    .post('/entradas', _entradasController.createEntrada)

  //CRUD EXAMENES
  .get('/examenes', _examenesController.getExamenes)
  .get('/examen', _examenesController.getExamen)
  .post('/examenes', _examenesController.createExamen);

module.exports = router;    











  //CRUD ENTRADAS

