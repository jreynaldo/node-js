const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'cursos'

    }
);
db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log(" Base de datos connectado");
});
module.exports = db;