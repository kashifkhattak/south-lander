const httpStatus = require('http-status-codes').StatusCodes;
const { Package, validatePackage } = require('../models/package.model');

const packageController = {
  createPackage: async (req, res) => {
    const { error } = validatePackage(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let package = new Package(req.body);
    package = await package.save();

    res.status(httpStatus.CREATED).json(package);
  },

  getPackages: async (req, res) => {
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

    const packages = await Package.find(dynamicQuery).select(projection);

    if (!packages || packages.length === 0) {
      console.log(
        `Packages not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Packages not found' });
    }

    res.status(httpStatus.OK).json(packages);
  },

  updatePackage: async (req, res) => {
    const { id } = req.params;
    const { error } = validatePackage(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedPackage = await Package.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedPackage) {
      console.log(`Package not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Package not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Package updated',
      package: updatedPackage,
    });
  },

  disablePackage: async (req, res) => {
    const { id } = req.params;

    const disabledPackage = await Package.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );

    if (!disabledPackage) {
      console.log(`Package not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Package not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Package disabled',
      package: disabledPackage,
    });
  },

  deletePackage: async (req, res) => {
    const { id } = req.params;

    const deletedPackage = await Package.findByIdAndRemove(id);

    if (!deletedPackage) {
      console.log(`Package not found with ID: ${id}`);

      return res.status(httpStatus.NOT_FOUND).json({ error: 'Package not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Package deleted',
      package: deletedPackage,
    });
  },
};

module.exports = packageController;
