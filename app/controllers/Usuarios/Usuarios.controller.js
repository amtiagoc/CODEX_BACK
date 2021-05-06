const PostgresService = require('../../services/postgres.service');
const _pg = new PostgresService();

//Traer todos los usuarios
const getUsuarios = async (req, res) => {
    let sql = `select * from usuario`;
    try {
        let result = await _pg.executeSql(sql);
        console.log(result.rows);
        return res.send(result.rows);
    } catch (error) {
        console.log(error);
        return res.send({ ok: false, message: "Error consultando los usuarios", content: error, });
    }
};

//Traer un usuario en específico
const getUsuario = async (req, res) => {
    let sql = `select * from usuario where cedula_usuario = '11111'`;
    try {
        let result = await _pg.executeSql(sql);
        console.log(result.rows);
        return res.send(result.rows);
    } catch (error) {
        console.log(error);
        return res.send({ ok: false, message: "Error consultando el usuario", content: error, });
    }
};

//Crear un usuario
const createUsuario = async (req, res) => {
    try {
        let usuario = req.body;
        let sql = `insert into usuario (cedula_usuario, nombres, apellidos, fechanacimiento, correo, telefono, direccion, 
            ocupacion, id_especialidad, id_sexo, id_estadocivil, id_ciudad, id_rol) values('${usuario.cedula_usuario}', '${usuario.nombres}', 
            '${usuario.apellidos}', '${usuario.fechanacimiento}', '${usuario.correo}', '${usuario.telefono}', '${usuario.direccion}', '${usuario.ocupacion}',
            ${usuario.id_especialidad}, ${usuario.id_sexo}, ${usuario.id_estadocivil}, ${usuario.id_ciudad}, ${usuario.id_rol})`;
        let result = await _pg.executeSql(sql);
        console.log(result.rows);
        return res.send({ ok: result.rowCount == 1, message: result == 1 ? "El usuario no fue creado" : "Usuario creado", content: estudiante, });
    } catch (error) {
        return res.send({ ok: false, message: "Error creado el usuario", content: error, });
    }
};

//Actualizar Usuario
const updateUsuario = async (req, res) => {

};

//Eliminar Usuario
const DeleteUsuario = async (req, res) => {

};

module.exports = { getUsuarios, getUsuario, createUsuario};