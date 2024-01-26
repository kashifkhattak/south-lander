const Joi = require('joi');
const mongoose = require('mongoose');

const EventPlanningDetail = mongoose.model(
  process.env.DB_TABLE_EVENT_PLANNING_DETAILS,
  new mongoose.Schema({
    eventPlanningId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: process.env.DB_TABLE_EVENT_PLANNINGS,
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
    rating: {
      type: Number,
      required: true,
    },
    timeshareHighlights: {
      _id: false,
      type: [
        {
          key: String,
          value: String,
        },
      ],
      required: true,
    },
    venueOptions: {
      _id: false,
      type: [
        {
          location: String,
          description: String,
          rooms: String,
          capacity: String,
          experience: String,
        },
      ],
      required: true,
    },
    photoGallery: {
      type: [String],
      required: true,
    },
    inclusions: {
      type: [String],
      required: true,
    },
    pricePerPerson: {
      _id: false,
      type: [
        {
          title: String,
          about: String,
          rate: Number,
          imagePath: String,
        },
      ],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  })
);

function validateEventPlanningDetail(eventPlanningDetail) {
  const eventPlanningDetailSchema = Joi.object({
    eventPlanningId: Joi.objectId().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    rating: Joi.number().min(0).max(5).required(),
    timeshareHighlights: Joi.array().items(
      Joi.object({
        key: Joi.string().required(),
        value: Joi.string().required(),
      }).required()
    ),
    venueOptions: Joi.array()
      .items(
        Joi.object({
          location: String,
          description: String,
          rooms: String,
          capacity: String,
          experience: String,
        })
      )
      .required(),
    photoGallery: Joi.array().items(Joi.string()).required(),
    inclusions: Joi.array().items(Joi.string()).required(),
    pricePerPerson: Joi.array()
      .items(
        Joi.object({
          title: Joi.string().required(),
          about: Joi.string().required(),
          rate: Joi.number().required(),
          imagePath: Joi.string().required(),
        }).required()
      )
      .required(),
    location: Joi.string().required(),
  });

  return eventPlanningDetailSchema.validate(eventPlanningDetail);
}

module.exports = { EventPlanningDetail, validateEventPlanningDetail };
