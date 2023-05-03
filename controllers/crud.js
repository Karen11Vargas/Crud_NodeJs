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

//Metodo actualizar
exports.update = (req, res)=>{
    //Capturar valores
    const id = req.body.id;
   const usuario = req.body.usuario;
   const rol = req.body.rol;

   //Query
   conexion.query('UPDATE tb_usuario SET usuario=?, rol=?  WHERE id= ?', [usuario, rol, id], (error, results)=>{
    if (error) {
        console.log(error);
    }else{
        res.redirect('/');
    }
   })
}
