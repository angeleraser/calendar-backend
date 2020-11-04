const { response } = require("express"),
  {
    serverError,
    successRequest,
    clientError,
  } = require("../helpers/response-status"),
  EventSchema = require("../models/Event");

// Obtener eventos
const getEvents = async (_, resp = response) => {
  try {
    const events = await EventSchema.find().populate("user", "name _id"); // Encuentra a todos los eventos y con el .populate() se rellena el user para obtener los datos
    return successRequest(resp).status(200).body({
      events,
    });
  } catch (error) {
    return serverError(resp).status(500, {
      msg: "An error has occurred, please contact with the admin.",
    });
  }
};

// Crear nuevo evento
const createNewEvent = async (req, resp = response) => {
  try {
    const event = new EventSchema(req.body),
      { uid } = req;
    event.user = uid;
    eventSaved = await event.save();
    return successRequest(resp).status(201).body({
      event: eventSaved,
    });
  } catch (error) {
    return serverError(resp).status(500).body({
      msg: "An error has occurred, please contact with the admin.",
    });
  }
};

// Actualizar un evento
const updateEvent = async (req, resp = response) => {
  try {
    const eventID = req.params.id;
    //  1 - Encontrar evento en la base de datos y verificar su existencia
    const eventInDatabase = await EventSchema.findById(eventID);
    if (!eventInDatabase) {
      return clientError(resp).status(404).body({
        msg: "The event does not exist.",
      });
    }
    // 2 - Comparar el usuario que creo el evento con quien lo quiere editar
    const userEventID = eventInDatabase.user.toString(),
      userReqID = req.uid; // viene del token
    if (userEventID !== userReqID) {
      return clientError(resp).status(404).body({
        // No autorizado
        msg: "You don't have privileges to edit this event.",
      });
    } else {
      const newEvent = {
          ...req.body,
          user: userEventID,
        },
        updatedEvent = await EventSchema.findByIdAndUpdate(eventID, newEvent, {
          new: true, // permite que se retorne el evento actualizado de inmediato,
          useFindAndModify: false,
        });
      return successRequest(resp).status(200).body({
        event: updatedEvent,
      });
    }
  } catch (error) {
    return serverError(resp).status(500).body({
      msg: "An error has occurred, please contact with the admin.",
    });
  }
};

// Borrar evento
const deleteEvent = async (req, resp = response) => {
  try {
    const eventID = req.params.id;
    //  1 - Encontrar evento en la base de datos y verificar su existencia
    const eventInDatabase = await EventSchema.findById(eventID);
    if (!eventInDatabase) {
      return clientError(resp).status(404).body({
        msg: "The event does not exist.",
      });
    }
    // 2 - Comparar el usuario que creo el evento con quien lo quiere borrar
    const userEventID = eventInDatabase.user.toString(),
      userReqID = req.uid; // viene del token
    if (userEventID !== userReqID) {
      return clientError(resp).status(404).body({
        msg: "You don't have privileges to edit this event.",
      });
    } else {
      const deletedEvent = await EventSchema.findByIdAndRemove(eventID, {
        useFindAndModify: false,
      });
      return successRequest(resp).status(200).body({
        event: deletedEvent,
      });
    }
  } catch (error) {
    return serverError(resp).status(500).body({
      msg: "An error has occurred, please contact with the admin.",
    });
  }
};

module.exports = {
  createNewEvent,
  getEvents,
  deleteEvent,
  updateEvent,
};
