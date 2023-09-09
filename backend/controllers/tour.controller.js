const httpStatus = require('http-status-codes').StatusCodes;
const { Tour, validateTour } = require('../models/tour.model');

const tourController = {
  createTour: async (req, res) => {
    const { error } = validateTour(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let tour = new Tour(req.body);
    tour = await tour.save();

    res.status(httpStatus.CREATED).json(tour);
  },

  getTours: async (req, res) => {
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

    const tours = await Tour.find(dynamicQuery).select(projection);

    if (!tours || tours.length === 0) {
      console.log(
        `Tours not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Tours not found' });
    }

    res.status(httpStatus.OK).json(tours);
  },

  updateTour: async (req, res) => {
    const { id } = req.params;
    const { error } = validateTour(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedTour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTour) {
      console.log(`Tour not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Tour not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Tour updated',
      tour: updatedTour,
    });
  },

  disableTour: async (req, res) => {
    const { id } = req.params;

    const disabledTour = await Tour.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );

    if (!disabledTour) {
      console.log(`Tour not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Tour not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Tour disabled',
      tour: disabledTour,
    });
  },

  deleteTour: async (req, res) => {
    const { id } = req.params;

    const deletedTour = await Tour.findByIdAndRemove(id);

    if (!deletedTour) {
      console.log(`Tour not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Tour not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Tour deleted',
      tour: deletedTour,
    });
  },
};

module.exports = tourController;
