const Joi = require('joi');
const mongoose = require('mongoose');

const RentalDetail = mongoose.model(
  process.env.DB_TABLE_RENTAL_DETAILS,
  new mongoose.Schema({
    rentalId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: process.env.DB_TABLE_RENTALS,
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
    pricePerNight: {
      type: Number,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    rentalHighlights: {
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
    amenities: {
      type: [String],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  })
);

function validateRentalDetail(rentalDetail) {
  const rentalDetailSchema = Joi.object({
    rentalId: Joi.objectId().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    pricePerNight: Joi.number().required(),
    capacity: Joi.number().required(),
    rating: Joi.number().min(0).max(5).required(),
    rentalHighlights: Joi.array().items(
      Joi.object({
        key: Joi.string().required(),
        value: Joi.string().required(),
      }).required()
    ),
    photoGallery: Joi.array().items(Joi.string()).required(),
    amenities: Joi.array().items(Joi.string()).required(),
    location: Joi.string().required(),
  });

  return rentalDetailSchema.validate(rentalDetail);
}

module.exports = { RentalDetail, validateRentalDetail };
