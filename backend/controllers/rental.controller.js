const httpStatus = require('http-status-codes').StatusCodes;
const { Rental, validateRental } = require('../models/rental.model');

const rentalController = {
  createRental: async (req, res) => {
    const { error } = validateRental(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let rental = new Rental(req.body);
    rental = await rental.save();

    res.status(httpStatus.CREATED).json(rental);
  },

  getRentals: async (req, res) => {
    const queryParams = req.query;

    const dynamicQuery = {};
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
    }

    Object.keys(queryParams).forEach((key) => {
      if (!invalidKeys.includes(key)) {
        dynamicQuery[key] = queryParams[key];
      }
    });

    const rentals = await Rental.find(dynamicQuery).select(projection);

    if (!rentals || rentals.length === 0) {
      console.log(
        `Rentals not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Rentals not found' });
    }

    res.status(httpStatus.OK).json(rentals);
  },

  updateRental: async (req, res) => {
    const { id } = req.params;
    const { error } = validateRental(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedRental = await Rental.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedRental) {
      console.log(`Rental not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Rental not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Rental updated',
      rental: updatedRental,
    });
  },

  disableRental: async (req, res) => {
    const { id } = req.params;

    const disabledRental = await Rental.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );

    if (!disabledRental) {
      console.log(`Rental not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Rental not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Rental disabled',
      rental: disabledRental,
    });
  },

  deleteRental: async (req, res) => {
    const { id } = req.params;

    const deletedRental = await Rental.findByIdAndRemove(id);

    if (!deletedRental) {
      console.log(`Rental not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Rental not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Rental deleted',
      rental: deletedRental,
    });
  },
};

module.exports = rentalController;
