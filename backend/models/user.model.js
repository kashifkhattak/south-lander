const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  nationality: {
    type: String,
    required: true,
  },
  idType: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdTimestamp: {
    type: Date,
    default: Date.now,
  },
  modifiedTimestamp: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      nationality: this.nationality,
      idType: this.idType,
      idNumber: this.idNumber,
      phone: this.phone,
      email: this.email,
      isAdmin: this.isAdmin,
      isActive: this.isActive,
    },
    process.env.JWT_PRIVATE_KEY
  );
  return token;
};

const User = mongoose.model(process.env.DB_TABLE_USERS, userSchema);

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(255).required(),
    lastName: Joi.string().min(3).max(255).required(),
    nationality: Joi.string().required(),
    idType: Joi.string().required(),
    idNumber: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
}

module.exports = {
  User,
  validateUser,
};
