const mysql = require('mysql'); // Esta línea falta en tu archivo

const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
conexion.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('¡Conectado a la base de datos!');
    }
});


module.exports = conexion;
