const PostgresService = require('../../services/postgres.service');
const _pg = new PostgresService();

/**
 * Método de consultar todas las entradas de la historia clinica de un paciente
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
const getEntradas = async (req, res) => {
    let sql = "SELECT id_historiaclinica, id_entrada, fecha, motivoconsulta FROM public.entrada";
    //WHERE id='" + id + "'";
    try {
        let result = await _pg.executeSql(sql);
        let rows = result.rows;
        return res.send({
            ok: true,
            message: "Entradas de la historia clinica consultadas",
            content: rows,
        });

    } catch (error) {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error consultando las entradas de la historia clinica",
            content: error,
        });
    }
};

/**
 * Método para consultar el detalle de una entrada de la historia clinica de un paciente
 * @param {Request} req
 * @param {Response} res
 * @returns
 */
const getEntrada = async (req, res) => {
    try {
        let id = req.params.id;
        let sql = "SELECT * FROM public.entrada WHERE id_entrada='" + id + "'";
        let result = await _pg.executeSql(sql);
        let rows = result.rows;
        return res.send({
            ok: true,
            message: "Entrada de la historia clinica consultada",
            content: rows[0],
        });
    } catch (error) {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error consultando la entrada de la historia clinica",
            content: error,
        });
    }
};

const createEntrada = async (req, res) => {
    try {
        let entrada = req.body;
        let sql = `INSERT INTO public.entrada (peso, estatura, fecha, motivoconsulta, descripcion, id_remision, id_historiaclinica) VALUES('${entrada.peso}', '${entrada.estatura}', '${entrada.fceha}', '${entrada.motivoconsulta}', '${entrada.descripcion}', '${entrada.id_remision}', '${entrada.id_historiaclinica}');`
        let result = await _pg.executeSql(sql);
        console.log(result)
        return res.send({
            ok: result.rowCount == 1,
            message: result.rowCount == 1 ? "Entrada de la historia clinica creada" : "La entrada de la historia clinica no fue creada",
            content: entrada,
        });

    } catch (error) {
        return res.send({
            ok: false,
            message: "Ha ocurrido un error creando la entrada de la historia clinica",
            content: error,
        });

    }
};

module.exports = { getEntradas, getEntrada, createEntrada};