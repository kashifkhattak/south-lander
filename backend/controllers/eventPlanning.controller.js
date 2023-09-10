const httpStatus = require('http-status-codes').StatusCodes;
const {
  EventPlanning,
  validateEventPlanning,
} = require('../models/eventPlanning.model');

const eventPlanningController = {
  createEventPlanning: async (req, res) => {
    const { error } = validateEventPlanning(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let eventPlanning = new EventPlanning(req.body);
    eventPlanning = await eventPlanning.save();

    res.status(httpStatus.CREATED).json(eventPlanning);
  },

  getEventPlannings: async (req, res) => {
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

    const eventPlannings = await EventPlanning.find(dynamicQuery).select(
      projection
    );

    if (!eventPlannings || eventPlannings.length === 0) {
      console.log(
        `Event Plannings not found with parameters: ${JSON.stringify(
          queryParams
        )}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Plannings not found' });
    }

    res.status(httpStatus.OK).json(eventPlannings);
  },

  updateEventPlanning: async (req, res) => {
    const { id } = req.params;
    const { error } = validateEventPlanning(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedEventPlanning = await EventPlanning.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedEventPlanning) {
      console.log(`Event Planning not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Planning not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Planning updated',
      eventPlanning: updatedEventPlanning,
    });
  },

  disableEventPlanning: async (req, res) => {
    const { id } = req.params;

    const disabledEventPlanning = await EventPlanning.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );

    if (!disabledEventPlanning) {
      console.log(`Event Planning not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Planning not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Planning disabled',
      eventPlanning: disabledEventPlanning,
    });
  },

  deleteEventPlanning: async (req, res) => {
    const { id } = req.params;

    const deletedEventPlanning = await EventPlanning.findByIdAndRemove(id);

    if (!deletedEventPlanning) {
      console.log(`Event Planning not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Planning not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Planning deleted',
      eventPlanning: deletedEventPlanning,
    });
  },
};

module.exports = eventPlanningController;
