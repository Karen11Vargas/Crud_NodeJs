const express = require('express');
const app = express();
const path = require('path');


// // Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')))

// Rutas
app.use('/', require('./routes/routes'));

// Vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Establecer la ruta al error
app.use((req, res, next) =>{
  res.status(404).sendFile(__dirname + '/public/404.html')
})

// Configuración
const PORT = process.env.PORT || 3000;

//Lo que hace es escuchar a traves de que puerto se esta ejecutando 
app.listen(PORT, () => {
    console.log(`Acceda al servidos haciendo click aqui http://localhost:${PORT}`)
  })