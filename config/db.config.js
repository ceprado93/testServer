const mysql = require('mysql');
require('dotenv').config();

// Creo la conexion con la base de datos
const conexion = mysql.createPool({
    connectionLimit: 10,
    host: "ecstatic-chaum.217-76-139-104.plesk.page",
    user: "pruebaroot",
    password: "~51x4Mdj",
    database: "TestCifrados"
});

conexion.getConnection((error) => {
    if(error) throw error;
    console.log('Conexion con la base de datos correcta!')
})

// Exporto para que pueda ser llamada la constante conexion desde otros archivos
module.exports = conexion;