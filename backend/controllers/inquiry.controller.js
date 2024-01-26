const httpStatus = require('http-status-codes').StatusCodes;
const { Inquiry, validateInquiry } = require('../models/inquiry.model');

const inquiryController = {
  createInquiry: async (req, res) => {
    const { error } = validateInquiry(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let inquiry = new Inquiry(req.body);
    inquiry = await inquiry.save();

    res.status(httpStatus.CREATED).json(inquiry);
  },

  getInquiries: async (req, res) => {
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
      if (!dateRangeKeys.includes(key) && !invalidKeys.includes(key)) {
        dynamicQuery[key] = queryParams[key];
      }
    });

    const inquiries = await Inquiry.find(dynamicQuery).select(projection);

    if (!inquiries || inquiries.length === 0) {
      console.log(
        `Inquiries not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Inquiries not found' });
    }

    res.status(httpStatus.OK).json(inquiries);
  },

  updateInquiry: async (req, res) => {
    const { id } = req.params;
    const { error } = validateInquiry(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updateInquiry = await Inquiry.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updateInquiry) {
      console.log(`Inquiry not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Inquiry not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Inquiry updated',
      inquiry: updateInquiry,
    });
  },

  deleteInquiry: async (req, res) => {
    const { id } = req.params;

    const deletedInquiry = await Inquiry.findByIdAndRemove(id);

    if (!deletedInquiry) {
      console.log(`Inquiry not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Inquiry not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Inquiry deleted',
      inquiry: deletedInquiry,
    });
  },
};

module.exports = inquiryController;
