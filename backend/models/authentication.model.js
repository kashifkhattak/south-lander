const Joi = require("joi");

const Authentication = {
  validateAuthentication: (user) => {
    const authenticationScehma = Joi.object({
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
    });

    return authenticationScehma.validate(user);
  },
};

module.exports = Authentication;
