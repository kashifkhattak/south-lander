const httpStatus = require('http-status-codes').StatusCodes;
const {
  RentalDetail,
  validateRentalDetail,
} = require('../models/rentalDetail.model');

const rentalDetailController = {
  createRentalDetail: async (req, res) => {
    const { error } = validateRentalDetail(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let rentalDetail = new RentalDetail(req.body);
    rentalDetail = await rentalDetail.save();

    res.status(httpStatus.CREATED).json(rentalDetail);
  },

  getRentalDetails: async (req, res) => {
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

    const rentalDetails = await RentalDetail.find(dynamicQuery).select(
      projection
    );

    if (!rentalDetails || rentalDetails.length === 0) {
      console.log(
        `Rental Details not found with parameters: ${JSON.stringify(
          queryParams
        )}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Rental Details not found' });
    }

    res.status(httpStatus.OK).json(rentalDetails);
  },

  updateRentalDetail: async (req, res) => {
    const { id } = req.params;
    const { error } = validateRentalDetail(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedRentalDetail = await RentalDetail.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedRentalDetail) {
      console.log(`Rental Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Rental Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Rental Detail updated',
      rentalDetail: updatedRentalDetail,
    });
  },

  deleteRentalDetail: async (req, res) => {
    const { id } = req.params;

    const deletedRentalDetail = await RentalDetail.findByIdAndRemove(id);

    if (!deletedRentalDetail) {
      console.log(`Rental Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Rental Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Rental Detail deleted',
      rentalDetail: deletedRentalDetail,
    });
  },
};

module.exports = rentalDetailController;
