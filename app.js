// Cargar variables de entorno
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

const express = require('express');
const app = express();
const router = require('./router'); // Asegúrate de tener 'router.js' configurado
const bodyParser = require('body-parser');
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const path = require('path');

// Configuración de la base de datos (importa tu archivo db.js)
const connection = require('./databases/db');

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));
// Usar body-parser para manejar los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Usar las rutas definidas en 'router.js'
app.use(router);

// Definir la ruta principal
app.get('/index', (req, res) => {
    res.render('index'); // Renderiza la vista 'index'
});


app.get('/planes', (req, res) => {
    res.render('planes'); // Renderiza la vista 'planes.ejs'
});


// ruta para dirigirnos a la  pagina de soporte 
app.get('/soporte', (req, res) => {
    res.render('soporte'); // Renderiza la vista 'planes.ejs'
});

// ruta para dirigirnos a la  pagina de tv 
app.get('/tv', (req, res) => {
    res.render('tv'); // Renderiza la vista 'planes.ejs'
});





// formularios de solicitud de acuerdo a la opciones de ofertas 
app.get('/formulariointernet20mg', (req, res) => {
    res.render('formulariointernet20mg'); // Renderiza la vista 'planes.ejs'
});

app.get('/formulariointernet100mg', (req, res) => {
    res.render('formulariointernet100mg'); // Renderiza la vista 'planes.ejs'
});

app.get('/formulariointernet500mg', (req, res) => {
    res.render('formulariointernet500mg'); // Renderiza la vista 'planes.ejs'
});

app.get('/formulariotvbasico', (req, res) => {
    res.render('formulariotvbasico'); // Renderiza la vista 'planes.ejs'
});

app.get('/formularioneflix', (req, res) => {
    res.render('formularioneflix'); // Renderiza la vista 'planes.ejs'
});

app.get('/formulariotvfibra', (req, res) => {
    res.render('formulariotvfibra'); // Renderiza la vista 'planes.ejs'
});



// ruta para pagina de soporte tecnico 
app.get('/formulaariocamaraseguridad', (req, res) => {
    res.render('formulaariocamaraseguridad'); // Renderiza la vista 'planes.ejs'
});

app.get('/formulariomantenimientoPC', (req, res) => {
    res.render('formulariomantenimientoPC'); // Renderiza la vista 'planes.ejs'
});

app.get('/formularioimpresora', (req, res) => {
    res.render('formularioimpresora'); // Renderiza la vista 'planes.ejs'
});




















app.post('/formulariointernet500mg', (req, res) => {
    // Código para procesar la solicitud
  });








  
app.post('/api/ofertas', (req, res) => {
    // Código para procesar la solicitud
  });
  

// Puerto para el servidor
const port = 5000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:5000`);
});
