const bcrypt = require('bcrypt');
const httpStatus = require('http-status-codes').StatusCodes;
const { User } = require('../models/user.model');
const Authentication = require('../models/authentication.model');

const authenticationController = {
  login: async (req, res) => {
    const { credentials, password } = req.body;
    const { error } = Authentication.validateAuthentication(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const user = await User.findOne({
      $or: [{ email: credentials }, { username: credentials }],
    });

    if (!user) {
      console.log('Invalid email or password.');

      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ error: 'Invalid email or password.' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      console.log('Invalid email or password.');

      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ error: 'Invalid email or password.' });
    }

    const token = user.generateAuthToken();

    res
      .status(httpStatus.OK)
      .header('x-auth-token', token)
      .json({ message: 'Login Successful!' });
  },
};

module.exports = authenticationController;
