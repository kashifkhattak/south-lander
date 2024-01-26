const httpStatus = require('http-status-codes').StatusCodes;
const {
  TourDetail,
  validateTourDetail,
} = require('../models/tourDetail.model');

const tourDetailController = {
  createTourDetail: async (req, res) => {
    const { error } = validateTourDetail(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let tourDetail = new TourDetail(req.body);
    tourDetail = await tourDetail.save();

    res.status(httpStatus.CREATED).json(tourDetail);
  },

  getTourDetails: async (req, res) => {
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

    const tourDetails = await TourDetail.find(dynamicQuery).select(projection);

    if (!tourDetails || tourDetails.length === 0) {
      console.log(
        `Tour Details not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Tour Details not found' });
    }

    res.status(httpStatus.OK).json(tourDetails);
  },

  updateTourDetail: async (req, res) => {
    const { id } = req.params;
    const { error } = validateTourDetail(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedTourDetail = await TourDetail.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedTourDetail) {
      console.log(`Tour Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Tour Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Tour Detail updated',
      tourDetail: updatedTourDetail,
    });
  },

  deleteTourDetail: async (req, res) => {
    const { id } = req.params;

    const deletedTourDetail = await TourDetail.findByIdAndRemove(id);

    if (!deletedTourDetail) {
      console.log(`Tour Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Tour Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Tour Detail deleted',
      tourDetail: deletedTourDetail,
    });
  },
};

module.exports = tourDetailController;
