const Joi = require('joi');
const mongoose = require('mongoose');

const Inquiry = mongoose.model(
  process.env.DB_TABLE_INQUIRIES,
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: process.env.DB_TABLE_USERS,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    helpType: {
      type: String,
      enum: [
        'All-Inclusive Packages',
        'Accomodation',
        'Timesharing',
        'Rentals',
        'Tours',
        'Events',
        'Booking/Payment',
        'Other',
      ],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['New', 'Resolved'],
      default: 'New',
    },
  })
);

function validateInquiry(inquiry) {
  const inquirySchema = Joi.object({
    userId: Joi.objectId().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    email: Joi.string().email().required(),
    helpType: Joi.string()
      .valid(
        'All-Inclusive Packages',
        'Accomodation',
        'Timesharing',
        'Rentals',
        'Tours',
        'Events',
        'Booking/Payment',
        'Other'
      )
      .required(),
    message: Joi.string().required(),
    status: Joi.string().valid('New', 'Resolved').default('New'),
  });

  return inquirySchema.validate(inquiry);
}

module.exports = {
  Inquiry,
  validateInquiry,
};
