const Joi = require('joi');
const mongoose = require('mongoose');

const VariantDetail = mongoose.model(
  process.env.DB_TABLE_VARIANT_DETAILS,
  new mongoose.Schema({
    variantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: process.env.DB_TABLE_PACKAGE_VARIANTS,
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
    airPackagePrice: {
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
    packageHighlights: {
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
          island: String,
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
      type: [
        {
          dayTitle: String,
          activities: String,
        },
      ],
    },
  })
);

function validateVariantDetail(variantDetail) {
  const variantDetailSchema = Joi.object({
    variantId: Joi.objectId().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    airPackagePrice: Joi.number().required(),
    duration: Joi.string().required(),
    rating: Joi.number().min(0).max(5).required(),
    packageHighlights: Joi.array().items(
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
          island: Joi.string().required(),
        }).required()
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

  return variantDetailSchema.validate(variantDetail);
}

module.exports = { VariantDetail, validateVariantDetail };
