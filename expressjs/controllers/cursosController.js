const db = require('../database/conexion');
class CursosController{
    constructor(){

    }
    consultar(req, res){
        res.json({ msg: 'Consulta cursos desde clase'});
    }
    consultarDetalle(req, res){``
        const {id} =req.params;
        res.json({ msg: `Consulta detalle  cursos desde clase con el id: ${id}`});
    }
    ingresar(req, res){
        res.json({ msg: 'ingresar cursos desde clase'});
    }
    actulizar(req, res){
        res.json({ msg: 'Actulizar cursos desde clase'});
    }
    borrar(req, res){
        res.json({ msg: 'Borrar cursos desde clase'});
    }
}

module.exports = new CursosController();