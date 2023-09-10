const Joi = require('joi');
const mongoose = require('mongoose');

const PackageVariant = mongoose.model(
  process.env.DB_TABLE_PACKAGE_VARIANTS,
  new mongoose.Schema({
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: process.env.DB_TABLE_PACKAGES,
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
    discountPercentage: {
      type: Number,
      default: 0,
    },
    availableTickets: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    availableDates: {
      type: String,
      required: true,
    },
    tag: {
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

function validatePackageVariant(packageVariant) {
  const packageVariantSchema = Joi.object({
    packageId: Joi.objectId().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    discountPercentage: Joi.number().min(0).max(100).allow(null),
    availableTickets: Joi.number().integer().required(),
    price: Joi.number().required(),
    availableDates: Joi.string().required(),
    tag: Joi.string().required(),
    landmarks: Joi.array().items(Joi.string()).required(),
    imagePath: Joi.string().required(),
  });

  return packageVariantSchema.validate(packageVariant);
}

module.exports = { PackageVariant, validatePackageVariant };
