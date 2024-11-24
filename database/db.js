require('dotenv').config();
const mysql = require('mysql');

//Conexion a la bd

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

//Capture error

conexion.connect((error) => {
    if (error) {
        console.error('El error es:' + error);
        return
    }
    console.log('Conexion Exitosa :)!')
})

module.exports = conexion;