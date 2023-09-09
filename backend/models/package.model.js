const Joi = require('joi');
const mongoose = require('mongoose');

const Package = mongoose.model(
  process.env.DB_TABLE_PACKAGES,
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    tagLine: {
      type: String,
      required: true,
    },
    discountPercentage: {
      type: Number,
      default: 0,
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

function validatePackage(package) {
  const packageSchema = Joi.object({
    title: Joi.string().required(),
    tagLine: Joi.string().required(),
    discountPercentage: Joi.number().min(0).max(100).allow(null),
    imagePath: Joi.string().required(),
  });

  return packageSchema.validate(package);
}

module.exports = {
  Package,
  validatePackage,
};
