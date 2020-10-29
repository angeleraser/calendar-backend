const { fieldsValidator } = require("../middlewares/fill-validator");
const { isValidDate } = require("../middlewares/is-date");

/*
  Events Routes
  /api/events
 */
const express = require("express"),
  { check } = require("express-validator"),
  { validateJsonWebToken } = require("../middlewares/jwt-validator"),
  router = express.Router(),
  {
    getEvents,
    deleteEvent,
    updateEvent,
    createNewEvent,
  } = require("../controllers/events");

// --------- API endpoints --------- \\
router.use(validateJsonWebToken); // Para validar todas las peticiones de forma global

// Obtener eventos
router.get("/", getEvents);

// Crear un nuevo evento
router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isValidDate),
    check("end", "Fecha de fin es obligatoria").custom(isValidDate),
    fieldsValidator,
  ],
  createNewEvent
);

// Actualizar evento (put)
router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isValidDate),
    check("end", "Fecha de fin es obligatoria").custom(isValidDate),
    fieldsValidator,
  ],
  updateEvent
);

// Borrar evento
router.delete("/:id", deleteEvent);

// Exportar default
module.exports = router;
