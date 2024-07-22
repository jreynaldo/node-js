const db = require('../database/conexion');
class ProfesoresController{
    constructor(){

    }
    consultar(req, res){
        res.json({ msg: 'Consulta profesores desde clase'});
    }
    consultarDetalle(req, res){
        res.json({ msg: 'Consulta detalle  profesores desde clase'});
    }
    ingresar(req, res){
        res.json({ msg: 'ingresar profesores desde clase'});
    }
    actulizar(req, res){
        res.json({ msg: 'Actulizar profesores desde clase'});
    }
    borrar(req, res){
        res.json({ msg: 'Borrar profesores desde clase'});
    }
}

module.exports = new ProfesoresController();