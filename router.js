const express = require('express');
const router = express.Router();
const controller = require('./controllers/crud'); // Asegúrate de que la ruta del controlador sea correcta
const conexion = require('./databases/db'); // Asegúrate de que la conexión esté definida y exportada en db.js

// Ruta principal para listar todos los clientes
router.get('/', (req, res) => {
    conexion.query('SELECT * FROM clientes', (error, results) => {
        if (error) {
            return res.status(500).send('Error en la base de datos'); // Manejo de error mejorado
        } else {
            res.render('index', { clientes: results }); // Pasa los resultados correctamente a la vista
        }
    });
});

// Ruta para guardar un nuevo cliente (POST)
router.post('/register', (req, res) => {
    console.log(req.body); // Esto te ayudará a ver si los datos están llegando correctamente
    controller.save(req, res);
});


// Ruta para registrar ofertas
router.post('/api/ofertas', (req, res) => {
    console.log('Datos recibidos:', req.body);  // Verifica qué datos llegan

    const { nombre, correo, telefono, descripcion, descuento } = req.body;

    // Inserta los datos del cliente en la tabla 'clientes'
    const queryCliente = 'INSERT INTO clientes (nombre, correo, telefono) VALUES (?, ?, ?)';
    conexion.query(queryCliente, [nombre, correo, telefono], (err, result) => {
        if (err) {
            console.error('Error al insertar datos en clientes:', err);
            return res.status(500).send('Error al insertar cliente');
        }

        const idCliente = result.insertId;

        // Inserta una oferta asociada a este cliente en la tabla 'ofertas'
        const queryOferta = 'INSERT INTO ofertas (Descripcion, Descuento, Id_cliente) VALUES (?, ?, ?)';
        conexion.query(queryOferta, [descripcion, descuento, idCliente], (err) => {
            if (err) {
                console.error('Error al insertar datos en ofertas:', err);
                return res.status(500).send('Error al insertar oferta');
            }

            // Enviar respuesta con una alerta
            res.json({ success: true, message: "Registro exitoso, nos comunicaremos pronto con usted. Gracias por confiar en nosotros." });
        });
    });
});

// Exporta el router
module.exports = router;
