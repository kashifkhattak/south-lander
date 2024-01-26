const httpStatus = require('http-status-codes').StatusCodes;
const { VariantDetail, validateVariantDetail } = require('../models/variantDetail.model');

const variantDetailController = {
  createVariantDetail: async (req, res) => {
    const { error } = validateVariantDetail(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let variantDetail = new VariantDetail(req.body);
    variantDetail = await variantDetail.save();

    res.status(httpStatus.CREATED).json(variantDetail);
  },

  getVariantDetails: async (req, res) => {
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

    const variantDetails = await VariantDetail.find(dynamicQuery).select(projection);

    if (!variantDetails || variantDetails.length === 0) {
      console.log(
        `Variant Details not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Variant Details not found' });
    }

    res.status(httpStatus.OK).json(variantDetails);
  },

  updateVariantDetail: async (req, res) => {
    const { id } = req.params;
    const { error } = validateVariantDetail(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedVariantDetail = await VariantDetail.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedVariantDetail) {
      console.log(`Variant Detail not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Variant Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Variant Detail updated',
      variantDetail: updatedVariantDetail,
    });
  },

  deleteVariantDetail: async (req, res) => {
    const { id } = req.params;

    const deletedVariantDetail = await VariantDetail.findByIdAndRemove(id);

    if (!deletedVariantDetail) {
      console.log(`Variant Detail not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Variant Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Variant Detail deleted',
      variantDetail: deletedVariantDetail,
    });
  },
};

module.exports = variantDetailController;
