const httpStatus = require('http-status-codes').StatusCodes;
const {
  EventPlanningDetail,
  validateEventPlanningDetail,
} = require('../models/eventPlanningDetail.model');

const eventPlanningDetailController = {
  createEventPlanningDetail: async (req, res) => {
    const { error } = validateEventPlanningDetail(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let eventPlanningDetail = new EventPlanningDetail(req.body);
    eventPlanningDetail = await eventPlanningDetail.save();

    res.status(httpStatus.CREATED).json(eventPlanningDetail);
  },

  getEventPlanningDetails: async (req, res) => {
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

    const eventPlanningDetails = await EventPlanningDetail.find(
      dynamicQuery
    ).select(projection);

    if (!eventPlanningDetails || eventPlanningDetails.length === 0) {
      console.log(
        `Event Planning Details not found with parameters: ${JSON.stringify(
          queryParams
        )}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Planning Details not found' });
    }

    res.status(httpStatus.OK).json(eventPlanningDetails);
  },

  updateEventPlanningDetail: async (req, res) => {
    const { id } = req.params;
    const { error } = validateEventPlanningDetail(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedEventPlanningDetail =
      await EventPlanningDetail.findByIdAndUpdate(id, req.body, {
        new: true,
      });

    if (!updatedEventPlanningDetail) {
      console.log(`Event Planning Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Planning Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Planning Detail updated',
      eventPlanningDetail: updatedEventPlanningDetail,
    });
  },

  deleteEventPlanningDetail: async (req, res) => {
    const { id } = req.params;

    const deletedEventPlanningDetail =
      await EventPlanningDetail.findByIdAndRemove(id);

    if (!deletedEventPlanningDetail) {
      console.log(`Event Planning Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Planning Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Planning Detail deleted',
      eventPlanningDetail: deletedEventPlanningDetail,
    });
  },
};

module.exports = eventPlanningDetailController;
