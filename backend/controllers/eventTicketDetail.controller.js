const httpStatus = require('http-status-codes').StatusCodes;
const {
  EventTicketDetail,
  validateEventTicketDetail,
} = require('../models/eventTicketDetail.model');

const eventTicketDetailController = {
  createEventTicketDetail: async (req, res) => {
    const { error } = validateEventTicketDetail(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let eventTicketDetail = new EventTicketDetail(req.body);
    eventTicketDetail = await eventTicketDetail.save();

    res.status(httpStatus.CREATED).json(eventTicketDetail);
  },

  getEventTicketDetails: async (req, res) => {
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

    const eventTicketDetails = await EventTicketDetail.find(
      dynamicQuery
    ).select(projection);

    if (!eventTicketDetails || eventTicketDetails.length === 0) {
      console.log(
        `Event Ticket Details not found with parameters: ${JSON.stringify(
          queryParams
        )}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Ticket Details not found' });
    }

    res.status(httpStatus.OK).json(eventTicketDetails);
  },

  updateEventTicketDetail: async (req, res) => {
    const { id } = req.params;
    const { error } = validateEventTicketDetail(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedEventTicketDetail = await EventTicketDetail.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedEventTicketDetail) {
      console.log(`Event Ticket Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Ticket Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Ticket Detail updated',
      eventTicketDetail: updatedEventTicketDetail,
    });
  },

  deleteEventTicketDetail: async (req, res) => {
    const { id } = req.params;

    const deletedEventTicketDetail = await EventTicketDetail.findByIdAndRemove(
      id
    );

    if (!deletedEventTicketDetail) {
      console.log(`Event Ticket Detail not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Ticket Detail not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Ticket Detail deleted',
      eventTicketDetail: deletedEventTicketDetail,
    });
  },
};

module.exports = eventTicketDetailController;
