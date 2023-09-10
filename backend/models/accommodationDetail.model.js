const Joi = require('joi');
const mongoose = require('mongoose');

const AccomodationDetail = mongoose.model(
  process.env.DB_TABLE_ACCOMMODATION_DETAILS,
  new mongoose.Schema({
    accommodationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: process.env.DB_TABLE_ACCOMMODATIONS,
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
    hotelHighlights: {
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
    appartments: {
      _id: false,
      type: [
        {
          title: String,
          amenities: String,
          facilities: String,
          maxOccupancy: String,
          pricePerNight: Number,
          imagePath: String,
        },
      ],
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

function validateAccomodationDetail(accommodationDetail) {
  const accommodationDetailSchema = Joi.object({
    accommodationId: Joi.objectId().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    rating: Joi.number().min(0).max(5).required(),
    hotelHighlights: Joi.array().items(
      Joi.object({
        key: Joi.string().required(),
        value: Joi.string().required(),
      }).required()
    ),
    photoGallery: Joi.array().items(Joi.string()).required(),
    appartments: Joi.array()
      .items(
        Joi.object({
          title: Joi.string().required(),
          amenities: Joi.string().required(),
          facilities: Joi.string().required(),
          maxOccupancy: Joi.string().required(),
          pricePerNight: Joi.number().required(),
          imagePath: Joi.string().required(),
        }).required()
      )
      .required(),
    amenities: Joi.array().items(Joi.string()).required(),
    location: Joi.string().required(),
  });

  return accommodationDetailSchema.validate(accommodationDetail);
}

module.exports = { AccomodationDetail, validateAccomodationDetail };
