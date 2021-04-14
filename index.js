const express = require('express');
require('dotenv').config();

// Crear el servidor de express
const app = express();

// Directorio publico
app.use(express.static('public'));

// Rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
