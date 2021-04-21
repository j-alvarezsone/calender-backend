/*
  Event Routes
  /api/events
*/

const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validateJWT);

// Obtener eventos
router.get('/', getEvents);
// Crear un nuevo evento
router.post('/', createEvent);
// Actualizar evento
router.put('/:id', updateEvent);
// Borrar evento
router.delete('/:id', deleteEvent);

module.exports = router;
