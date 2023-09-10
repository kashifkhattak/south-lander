const Joi = require('joi');
const mongoose = require('mongoose');

const EventTicket = mongoose.model(
  process.env.DB_TABLE_EVENT_TICKETS,
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  })
);

function validateEventTicket(eventTicket) {
  const eventTicketSchema = Joi.object({
    title: Joi.string().required(),
    date: Joi.string().required(),
    location: Joi.string().required(),
    time: Joi.string().required(),
    price: Joi.number().required(),
    imagePath: Joi.string().required(),
  });

  return eventTicketSchema.validate(eventTicket);
}

module.exports = { EventTicket, validateEventTicket };
