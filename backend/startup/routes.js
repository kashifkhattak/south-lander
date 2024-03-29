const express = require('express');
require('express-async-errors');
const cors = require('cors');
const user = require('../routes/user.route');
const authentication = require('../routes/authentication.route');
const package = require('../routes/package.route');
const packageVariant = require('../routes/packageVariant.route');
const variantDetail = require('../routes/variantDetail.route');
const accommodation = require('../routes/accommodation.route');
const accommodationDetail = require('../routes/accommodationDetail.route');
const eventPlanning = require('../routes/eventPlanning.route');
const eventPlanningDetail = require('../routes/eventPlanningDetail.route');
const rental = require('../routes/rental.route');
const rentalDetail = require('../routes/rentalDetail.route');
const tour = require('../routes/tour.route');
const tourDetail = require('../routes/tourDetail.route');
const eventTicket = require('../routes/eventTicket.route');
const eventTicketDetail = require('../routes/eventTicketDetail.route');
const booking = require('../routes/booking.route');
const inquiry = require('../routes/inquiry.route');
const error = require('../middlewares/error');

module.exports = (app) => {
  app.use(cors({
    exposedHeaders: ['x-auth-token'],
  }));
  app.use(express.json());
  app.use('/api/user', user);
  app.use('/api/auth', authentication);
  app.use('/api/package', package);
  app.use('/api/packageVariant', packageVariant);
  app.use('/api/variantDetail', variantDetail);
  app.use('/api/accommodation', accommodation);
  app.use('/api/accommodationDetail', accommodationDetail);
  app.use('/api/eventPlanning', eventPlanning);
  app.use('/api/eventPlanningDetail', eventPlanningDetail);
  app.use('/api/rental', rental);
  app.use('/api/rentalDetail', rentalDetail);
  app.use('/api/tour', tour);
  app.use('/api/tourDetail', tourDetail);
  app.use('/api/eventTicket', eventTicket);
  app.use('/api/eventTicketDetail', eventTicketDetail);
  app.use('/api/booking', booking);
  app.use('/api/inquiry', inquiry);
  app.use(error);
};
