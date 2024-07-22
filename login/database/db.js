const mysql = require('mysql2');
const connection = mysql.createConnection({
   user: process.env.DB_USER,
   host: process.env.DB_HOST,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE
});
connection.connect((error) =>{
    if (error) {
        console.log(' el error en la conexion es: ', error);
        return;
    }
   console.log(' Conectado a la base de datos ');
});

module.exports = connection; 