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

//Ruta metodos crud
const crud = require('../controllers/crud');
router.post('/save', crud.save);
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT id, usuario, rol, estado, concat(date(fechaCreacion), " ", time(fechaCreacion))AS fecha from tb_usuario WHERE id = ?', [id], (error,results)=>{
        if (error) {
            throw error;
        }else{
            console.log(results);
            res.render('index',{resultsUpdate:results[0]});
        }
    })
});


// Exportar el router para usar en la aplicación principal
module.exports = router;