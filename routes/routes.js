const express = require('express');
const router = express.Router();

const conexion = require('../database/db');

// Página principal
router.get('/', (req, res) => {
    conexion.query('SELECT id, usuario, rol, estado, concat(date(fechaCreacion), " ", time(fechaCreacion))AS fecha FROM tb_usuario WHERE estado=1', (error, results)=>{
        if (error) {
            throw error;
            
        }else{
            res.render('index', {results:results})
        }
    })
});

//Consultar
router.get('/edit/:id', (req, res)=>{

    const id = req.params.id;

    conexion.query('SELECT id, usuario, rol FROM tb_usuario WHERE id=?',[id], (error, results)=>{
        if (error) {
            throw error;
            
        }else{
            res.render('edit', {users:results[0]})
        }
    })
})

router.get('/delete/:id', (req, res)=>{
    const id = req.params.id;

    conexion.query('UPDATE tb_usuario SET estado = 0 WHERE id=?',[id], (error, results)=>{
        if (error) {
            throw error;
            
        }else{
            res.redirect('/')
        }
    })

})

//Ruta metodos crud
const crud = require('../controllers/crud');
router.post('/save', crud.save);
router.post('/edit', crud.update);

  
  
  

// Exportar el router para usar en la aplicación principal
module.exports = router;