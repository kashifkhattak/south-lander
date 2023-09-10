const httpStatus = require('http-status-codes').StatusCodes;
const {
  AccomodationDetail,
  validateAccomodationDetail,
} = require('../models/accommodationDetail.model');

const accommodationDetailController = {
  createAccomodationDetail: async (req, res) => {
    const { error } = validateAccomodationDetail(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let accommodationDetail = new AccomodationDetail(req.body);
    accommodationDetail = await accommodationDetail.save();

    res.status(httpStatus.CREATED).json(accommodationDetail);
  },

  getAccomodationDetails: async (req, res) => {
    const queryParams = req.query;

    const dynamicQuery = {};
    const invalidKeys = ['fields', 'includeIds'];

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

    const accommodationDetails = await AccomodationDetail.find(
      dynamicQuery
    ).select(projection);

    if (!accommodationDetails || accommodationDetails.length === 0) {
      console.log(
        `Accomodation Details not found with parameters: ${JSON.stringify(
          queryParams
        )}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Accomodation Details not found' });
    }

    res.status(httpStatus.OK).json(accommodationDetails);
  },

  updateAccomodationDetail: async (req, res) => {
    const { id } = req.params;
    const { error } = validateAccomodationDetail(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedAccomodationDetail =
      await AccomodationDetail.findByIdAndUpdate(id, req.body, {
        new: true,
      });

    if (!updatedAccomodationDetail) {
      console.log(`Accomodation Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Accomodation Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Accomodation Detail updated',
      accommodationDetail: updatedAccomodationDetail,
    });
  },

  deleteAccomodationDetail: async (req, res) => {
    const { id } = req.params;

    const deletedAccomodationDetail =
      await AccomodationDetail.findByIdAndRemove(id);

    if (!deletedAccomodationDetail) {
      console.log(`Accomodation Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Accomodation Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Accomodation Detail deleted',
      accommodationDetail: deletedAccomodationDetail,
    });
  },
};

module.exports = accommodationDetailController;
