const Joi = require('joi');
const mongoose = require('mongoose');

const Accomodation = mongoose.model(
  process.env.DB_TABLE_ACCOMMODATIONS,
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    landmarks: {
      type: [String],
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

function validateAccomodation(accommodation) {
  const accommodationSchema = Joi.object({
    title: Joi.string().required(),
    landmarks: Joi.array().items(Joi.string()).required(),
    imagePath: Joi.string().required(),
  });

  return accommodationSchema.validate(accommodation);
}

module.exports = { Accomodation, validateAccomodation };
