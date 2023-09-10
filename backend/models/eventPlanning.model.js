const Joi = require('joi');
const mongoose = require('mongoose');

const EventPlanning = mongoose.model(
  process.env.DB_TABLE_EVENT_PLANNINGS,
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    startingPrice: {
      type: String,
      required: true,
    },
    rating: {
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

function validateEventPlanning(eventPlanning) {
  const eventPlanningSchema = Joi.object({
    title: Joi.string().required(),
    startingPrice: Joi.string().required(),
    rating: Joi.number().min(0).max(5).required(),
    imagePath: Joi.string().required(),
  });

  return eventPlanningSchema.validate(eventPlanning);
}

module.exports = { EventPlanning, validateEventPlanning };
