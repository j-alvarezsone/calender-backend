const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection();

// Directorio publico, use = middleware
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
//* Todos los archivos que van a exportar desde './routes/auth', lo vamos a utilizar en el '/api/auth'
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
