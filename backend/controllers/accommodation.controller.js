const httpStatus = require('http-status-codes').StatusCodes;
const {
  Accomodation,
  validateAccomodation,
} = require('../models/accommodation.model');

const accommodationController = {
  createAccomodation: async (req, res) => {
    const { error } = validateAccomodation(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let accommodation = new Accomodation(req.body);
    accommodation = await accommodation.save();

    res.status(httpStatus.CREATED).json(accommodation);
  },

  getAccomodations: async (req, res) => {
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

    const accommodations = await Accomodation.find(dynamicQuery).select(
      projection
    );
    console.log("HELLO", accommodations);

    if (!accommodations || accommodations.length === 0) {
      console.log(
        `Accomodations not found with parameters: ${JSON.stringify(
          queryParams
        )}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Accomodations not found' });
    }

    res.status(httpStatus.OK).json(accommodations);
  },

  updateAccomodation: async (req, res) => {
    const { id } = req.params;
    const { error } = validateAccomodation(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedAccomodation = await Accomodation.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedAccomodation) {
      console.log(`Accomodation not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Accomodation not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Accomodation updated',
      accommodation: updatedAccomodation,
    });
  },

  disableAccomodation: async (req, res) => {
    const { id } = req.params;

    const disabledAccomodation = await Accomodation.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );

    if (!disabledAccomodation) {
      console.log(`Accomodation not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Accomodation not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Accomodation disabled',
      accommodation: disabledAccomodation,
    });
  },

  deleteAccomodation: async (req, res) => {
    const { id } = req.params;

    const deletedAccomodation = await Accomodation.findByIdAndRemove(id);

    if (!deletedAccomodation) {
      console.log(`Accomodation not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Accomodation not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Accomodation deleted',
      accommodation: deletedAccomodation,
    });
  },
};

module.exports = accommodationController;
