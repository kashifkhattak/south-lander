const Joi = require('joi');
const mongoose = require('mongoose');

const EventTicketDetail = mongoose.model(
  process.env.DB_TABLE_EVENT_TICKET_DETAILS,
  new mongoose.Schema({
    eventTicketId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: process.env.DB_TABLE_EVENT_TICKETS,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    eventPackageHighlights: {
      _id: false,
      type: [
        {
          key: String,
          value: String,
        },
      ],
      required: true,
    },
    photoGallery: {
      type: [String],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    about: {
      _id: false,
      type: [
        {
          placesCovered: String,
          description: String,
          activities: String,
          cityParish: String,
        },
      ],
      required: true,
    },
    inclusions: {
      type: [String],
      required: true,
    },
    exclusions: {
      type: [String],
      required: true,
    },
    itinerary: {
      _id: false,
      type: [
        {
          dayTitle: String,
          activities: String,
        },
      ],
    },
  })
);

function validateEventTicketDetail(eventTicketDetail) {
  const eventTicketDetailSchema = Joi.object({
    eventTicketId: Joi.objectId().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    duration: Joi.string().required(),
    rating: Joi.number().min(0).max(5).required(),
    eventPackageHighlights: Joi.array().items(
      Joi.object({
        key: Joi.string().required(),
        value: Joi.string().required(),
      }).required()
    ),
    photoGallery: Joi.array().items(Joi.string()).required(),
    location: Joi.string().required(),
    about: Joi.array()
      .items(
        Joi.object({
          placesCovered: Joi.string().required(),
          description: Joi.string().required(),
          activities: Joi.string().required(),
          cityParish: Joi.string().required(),
        })
      )
      .required(),
    inclusions: Joi.array().items(Joi.string()).required(),
    exclusions: Joi.array().items(Joi.string()).required(),
    itinerary: Joi.array()
      .items(
        Joi.object({
          dayTitle: Joi.string().required(),
          activities: Joi.string().required(),
        }).required()
      )
      .required(),
  });

  return eventTicketDetailSchema.validate(eventTicketDetail);
}

module.exports = { EventTicketDetail, validateEventTicketDetail };
