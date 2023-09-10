const Joi = require('joi');
const mongoose = require('mongoose');

const TourDetail = mongoose.model(
  process.env.DB_TABLE_TOUR_DETAILS,
  new mongoose.Schema({
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: process.env.DB_TABLE_TOURS,
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
    rating: {
      type: Number,
      required: true,
    },
    tourHighlights: {
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
          itinerary: String,
        },
      ],
      required: true,
    },
    notes: {
      type: String,
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
  })
);

function validateTourDetail(tourDetail) {
  const tourDetailSchema = Joi.object({
    tourId: Joi.objectId().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    rating: Joi.number().min(0).max(5).required(),
    tourHighlights: Joi.array().items(
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
          itinerary: Joi.string().required(),
        })
      )
      .required(),
    notes: Joi.string().required(),
    inclusions: Joi.array().items(Joi.string()).required(),
    exclusions: Joi.array().items(Joi.string()).required(),
  });

  return tourDetailSchema.validate(tourDetail);
}

module.exports = { TourDetail, validateTourDetail };
