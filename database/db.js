const mysql = require('mysql');

//Conexion a la bd

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_nodejs'
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