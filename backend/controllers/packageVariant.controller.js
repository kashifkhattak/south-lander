const httpStatus = require('http-status-codes').StatusCodes;
const { PackageVariant, validatePackageVariant } = require('../models/packageVariant.model');

const packageVariantController = {
  createPackageVariant: async (req, res) => {
    const { error } = validatePackageVariant(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let packageVariant = new PackageVariant(req.body);
    packageVariant = await packageVariant.save();

    res.status(httpStatus.CREATED).json(packageVariant);
  },

  getPackageVariants: async (req, res) => {
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

    const packageVariants = await PackageVariant.find(dynamicQuery).select(projection);

    if (!packageVariants || packageVariants.length === 0) {
      console.log(
        `Package Variants not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Package Variants not found' });
    }

    res.status(httpStatus.OK).json(packageVariants);
  },

  updatePackageVariant: async (req, res) => {
    const { id } = req.params;
    const { error } = validatePackageVariant(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedPackageVariant = await PackageVariant.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedPackageVariant) {
      console.log(`Package Variant not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Package Variant not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Package Variant updated',
      packageVariant: updatedPackageVariant,
    });
  },

  disablePackageVariant: async (req, res) => {
    const { id } = req.params;

    const disabledPackageVariant = await PackageVariant.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );

    if (!disabledPackageVariant) {
      console.log(`Package Variant not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Package Variant not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Package Variant disabled',
      packageVariant: disabledPackageVariant,
    });
  },

  deletePackageVariant: async (req, res) => {
    const { id } = req.params;

    const deletedPackageVariant = await PackageVariant.findByIdAndRemove(id);

    if (!deletedPackageVariant) {
      console.log(`Package Variant not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Package Variant not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Package Variant deleted',
      packageVariant: deletedPackageVariant,
    });
  },
};

module.exports = packageVariantController;
