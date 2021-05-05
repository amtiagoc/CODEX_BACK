const express = require('express');

const router = express.Router();
const _usuariosController = require('../controllers/Usuarios/Usuarios.controller')

router
    .get('/usuarios', _usuariosController.getUsuarios)
    .get('/usuario', _usuariosController.getUsuario)
    .post('/', _usuariosController.createUsuario);

module.exports = router;