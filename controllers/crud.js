const conexion = require('../database/db');

//Metodo guardar
exports.save = (req, res)=>{
    //Capturar valores
   const usuario = req.body.usuario;
   const rol = req.body.rol;

   //Query
   conexion.query('INSERT INTO tb_usuario (usuario, rol, estado) VALUES (?,?,1)', [usuario, rol], (error, results)=>{
    if (error) {
        console.log(error);
    }else{
        res.redirect('/');
    }
   })
}

