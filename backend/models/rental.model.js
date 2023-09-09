const Joi = require('joi');
const mongoose = require('mongoose');

const Rental = mongoose.model(
  process.env.DB_TABLE_RENTALS,
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    options: {
      _id: false,
      type: [
        {
          title: String,
          landmarks: [String],
          imagePath: String,
          isActive: {
            type: Boolean,
            default: true,
          },
        },
      ],
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  })
);

function validateRental(rental) {
  const rentalSchema = Joi.object({
    title: Joi.string().required(),
    options: Joi.array()
      .items(
        Joi.object({
          title: Joi.string().required(),
          landmarks: Joi.array().items(Joi.string()).required(),
          imagePath: Joi.string().required(),
        }).required()
      )
      .required(),
  });

  return rentalSchema.validate(rental);
}

module.exports = { Rental, validateRental };
