const httpStatus = require('http-status-codes').StatusCodes;
const {
  EventTicket,
  validateEventTicket,
} = require('../models/eventTicket.model');

const eventTicketController = {
  createEventTicket: async (req, res) => {
    const { error } = validateEventTicket(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let eventTicket = new EventTicket(req.body);
    eventTicket = await eventTicket.save();

    res.status(httpStatus.CREATED).json(eventTicket);
  },

  getEventTickets: async (req, res) => {
    const queryParams = req.query;

    const dynamicQuery = {};
    const dateRangeKeys = ['date'];
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

    if (queryParams.date) {
      dynamicQuery.date = {
        $gte: new Date(queryParams.date),
        $lte: new Date(),
      };
    }

    const eventTickets = await EventTicket.find(dynamicQuery).select(
      projection
    );

    if (!eventTickets || eventTickets.length === 0) {
      console.log(
        `Event Tickets not found with parameters: ${JSON.stringify(
          queryParams
        )}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Tickets not found' });
    }

    res.status(httpStatus.OK).json(eventTickets);
  },

  updateEventTicket: async (req, res) => {
    const { id } = req.params;
    const { error } = validateEventTicket(req.body);

    if (error) {
      console.log(`Invalid data format: ${error}`);

      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: `Invalid data format: ${error}` });
    }

    const updatedEventTicket = await EventTicket.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedEventTicket) {
      console.log(`Event Ticket not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Ticket not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Ticket updated',
      eventTicket: updatedEventTicket,
    });
  },

  disableEventTicket: async (req, res) => {
    const { id } = req.params;

    const disabledEventTicket = await EventTicket.findByIdAndUpdate(
      id,
      { isActive: false },
      {
        new: true,
      }
    );

    if (!disabledEventTicket) {
      console.log(`Event Ticket not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Ticket not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Ticket disabled',
      eventTicket: disabledEventTicket,
    });
  },

  deleteEventTicket: async (req, res) => {
    const { id } = req.params;

    const deletedEventTicket = await EventTicket.findByIdAndRemove(id);

    if (!deletedEventTicket) {
      console.log(`Event Ticket not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Event Ticket not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Event Ticket deleted',
      eventTicket: deletedEventTicket,
    });
  },
};

module.exports = eventTicketController;
