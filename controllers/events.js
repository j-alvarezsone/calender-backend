const { response } = require('express'); // recuperar el intellisense

const getEvents = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Get events',
  });
};

const createEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Create event',
  });
};

const updateEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Update event',
  });
};

const deleteEvent = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Delete event',
  });
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};
