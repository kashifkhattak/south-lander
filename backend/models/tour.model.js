const Joi = require('joi');
const mongoose = require('mongoose');

const Tour = mongoose.model(
  process.env.DB_TABLE_TOURS,
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    tagLine: {
      type: String,
      required: true,
    },
    description: {
      type: String,
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

function validateTour(tour) {
  const tourSchema = Joi.object({
    title: Joi.string().required(),
    tagLine: Joi.string().required(),
    description: Joi.string().required(),
    imagePath: Joi.string().required(),
  });

  return tourSchema.validate(tour);
}

module.exports = { Tour, validateTour };
