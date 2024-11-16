// controllers/crud.js
const conexion = require('../databases/db');  // Asegúrate de que esta ruta esté correcta
exports.save = (req, res) => {
    const { Nombre, Apellido, Telefono, correo } = req.body;

    // Validación de campos
    if (!Nombre || !Apellido || !Telefono || !correo) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    // Log de entrada
    console.log('Datos recibidos:', { Nombre, Apellido, Telefono, correo });

    // Consulta para insertar el nuevo cliente
    const query = 'INSERT INTO clientes (Nombre, Apellido, Telefono, `correo`) VALUES (?, ?, ?, ?)';
    conexion.query(query, [Nombre, Apellido, Telefono, correo], (error, results) => {
        if (error) {
            // Log del error
            console.error('Error al guardar en la base de datos:', error);
            return res.status(500).send('Error al guardar el cliente');
        }

        // Log de éxito
        console.log('Cliente guardado con éxito', results);

        // Redirige al usuario a la página principal después de guardar
        res.render('planes', {
            alertTitle: 'Registro Exitoso',
            alertMessage: 'El cliente ha sido registrado correctamente.',
            alertIcon: 'success',
            showConfirmButton: true,
            timer: 3000,
            ruta: 'planes' // o la ruta a la que quieras redirigir
        });
    });
};
