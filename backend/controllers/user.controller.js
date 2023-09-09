const bcrypt = require('bcrypt');
const httpStatus = require('http-status-codes').StatusCodes;
const { User, validateUser } = require('../models/user.model');

const userController = {
  registerUser: async (req, res) => {
    const { error } = validateUser(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    let user = await User.findOne({ email: req.body.email });

    if (user) {
      console.log('User already registered.');

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: 'User already registered.' });
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    user = new User(req.body);
    await user.save();

    const sanitizedBody = { ...req.body };
    (sanitizedBody.isAdmin = user.isAdmin),
      (sanitizedBody.isActive = user.isActive),
      (sanitizedBody.createdTimestamp = user.createdTimestamp),
      (sanitizedBody.modifiedTimestamp = user.modifiedTimestamp);
    delete sanitizedBody.password;

    const token = user.generateAuthToken();

    res
      .status(httpStatus.CREATED)
      .header('x-auth-token', token)
      .json(sanitizedBody);
  },

  registerAdmin: async (req, res) => {
    const { error } = validateUser(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    let user = await User.findOne({ email: req.body.email });

    if (user) {
      console.log('User already registered.');

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: 'User already registered.' });
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    user = new User(req.body);
    user.isAdmin = true;
    await user.save();

    const sanitizedBody = { ...req.body };
    (sanitizedBody.isAdmin = user.isAdmin),
      (sanitizedBody.isActive = user.isActive),
      (sanitizedBody.createdTimestamp = user.createdTimestamp),
      (sanitizedBody.modifiedTimestamp = user.modifiedTimestamp);
    delete sanitizedBody.password;

    const token = user.generateAuthToken();

    res
      .status(httpStatus.CREATED)
      .header('x-auth-token', token)
      .json(sanitizedBody);
  },

  getMyUser: async (req, res) => {
    const user = await User.findById(req.user._id).select('-password');

    if (!user) {
      console.log(`User not found with ID: ${req.user._id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'User not found' });
    }

    res.status(httpStatus.OK).json(user);
  },

  getAllUsers: async (req, res) => {
    const queryParams = req.query;

    const dynamicQuery = {};
    const dateRangeKeys = ['createdTimestamp', 'modifiedTimestamp'];
    const invalidKeys = ['fields'];

    const fieldsToReturn = queryParams.fields
      ? queryParams.fields.split(',')
      : [];

    const projection = {};

    if (fieldsToReturn.length > 0) {
      fieldsToReturn.forEach((field) => {
        projection[field.trim()] = 1;
      });

      if (queryParams.includeIds === 'false') projection['_id'] = 0;
    } else {
      projection.password = 0;
    }

    Object.keys(queryParams).forEach((key) => {
      if (!dateRangeKeys.includes(key) && !invalidKeys.includes(key)) {
        dynamicQuery[key] = queryParams[key];
      }
    });

    if (queryParams.createdTimestamp) {
      dynamicQuery.createdTimestamp = {
        $gte: new Date(queryParams.createdTimestamp),
        $lte: new Date(),
      };
    }

    if (queryParams.modifiedTimestamp) {
      dynamicQuery.modifiedTimestamp = {
        $gte: new Date(queryParams.modifiedTimestamp),
        $lte: new Date(),
      };
    }

    const users = await User.find(dynamicQuery).select(projection);

    if (!users || users.length === 0) {
      console.log(
        `Users not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Users not found' });
    }

    res.status(httpStatus.OK).json(users);
  },

  updateMyUser: async (req, res) => {
    const { error } = validateUser(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { ...req.body, modifiedTimestamp: Date.now() },
      {
        new: true,
      }
    ).select('-password');

    if (!updatedUser) {
      console.log(`User not found with ID: ${req.user._id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'User not found' });
    }

    const token = updatedUser.generateAuthToken();

    res
      .status(httpStatus.OK)
      .header('x-auth-token', token)
      .json({ message: 'User updated', user: updatedUser });
  },

  disableUser: async (req, res) => {
    const { id } = req.params;

    const disabledUser = await User.findByIdAndUpdate(
      id,
      { isActive: false, modifiedTimestamp: Date.now() },
      { new: true }
    ).select('-password');

    if (!disabledUser) {
      console.log(`User not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'User not found' });
    }

    res
      .status(httpStatus.OK)
      .json({ message: 'User disabled', user: disabledUser });
  },

  deleteUser: async (req, res) => {
    const { id } = req.params;

    const deletedUser = await User.findByIdAndRemove(id).select('-password');

    if (!deletedUser) {
      console.log(`User not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'User not found' });
    }

    res
      .status(httpStatus.OK)
      .json({ message: 'User deleted', user: deletedUser });
  },
};

module.exports = userController;
