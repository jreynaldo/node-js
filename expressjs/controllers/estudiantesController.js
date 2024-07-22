const db = require('../database/conexion');
class EstudiantesController {
    constructor() {

    }
    consultar(req, res) {
        try {
            const {dni, nombre, apellido,email} = req.body;
            db.query(  `SELECT * FROM cursos.estudiantes;`, (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows)
                });
        } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
        }
    }
    consultarDetalle(req, res) {
        const { id } = req.params;
        try {
        
            db.query(  `SELECT * FROM cursos.estudiantes WHERE id=?;`,id, (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                });
        } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
        }
    }
    ingresar(req, res) {
        try {
            const {dni, nombre, apellido,email} = req.body;
            db.query(  `INSERT INTO cursos.estudiantes
                ( dni, nombre, apellido, email)
                VALUES( ?, ?, ?, ?);`,[dni, nombre, apellido,email], (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json({ id:  rows.insertId})
                });
        } catch (err) {
            console.log(err);
            res.status(500).send(err.message);
        }
    }
    actulizar(req, res) {
        res.json({ msg: 'Actulizar estudiantes desde clase' });
    }
    borrar(req, res) {
        res.json({ msg: 'Borrar estudiantes desde clase' });
    }
}

module.exports = new EstudiantesController();