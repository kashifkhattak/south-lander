const Joi = require('joi');
const mongoose = require('mongoose');

const Booking = mongoose.model(
  process.env.DB_TABLE_BOOKINGS,
  new mongoose.Schema({
    type: {
      type: String,
      enum: [
        'Packages',
        'Accommodation',
        'Event Planning',
        'Rentals',
        'Tours',
        'Event Tickets',
        'Transfers',
      ],
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: process.env.DB_TABLE_USERS,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    idType: {
      type: String,
      required: true,
    },
    idNumber: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    //Booking Type: Packages
    package: String,
    //Booking Type: Accommodation
    facilitiesList: String,
    roomsCount: String,
    roomOccupants: String,
    //Booking Type: Event Planning
    eventType: String,
    eventDescription: String,
    requireTicketSaleManagement: Boolean,
    //Booking Type: Rentals
    rental: String,
    //Booking Type: Tours
    tour: String,
    pickUpLocation: String,
    carType: String,
    //Booking Type: Event Tickets
    event: String,
    seatLocation: String,
    ticketsCount: Number,
    //Booking Type: Transfers
    origin: String,
    destination: String,
    transportType: {
      type: String,
      enum: [
        'Flight (If Available b/w Locations)',
        'Exclusive Land Transport',
        'Public Land Transport',
      ],
    },
    transportDescription: String,
    adultsCount: String,
    childrenCount: String,
    infantCount: String,
    checkIn: Date,
    checkOut: Date,
    date: Date,
    time: String,
    price: Number,
    status: {
      type: String,
      enum: ['Pending Payment', 'Pending Approval', 'Accepted', 'Rejected', 'Active', 'Complete'],
      default: 'Pending Payment',
    },
  })
);

function validateBooking(booking) {
  const bookingSchema = Joi.object({
    type: Joi.string()
      .valid(
        'Packages',
        'Accommodation',
        'Event Planning',
        'Rentals',
        'Tours',
        'Event Tickets',
        'Transfers'
      )
      .required(),
    name: Joi.string().required(),
    nationality: Joi.string().required(),
    idType: Joi.string().required(),
    idNumber: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    package: Joi.objectId().when('type', {
      is: 'Packages',
      then: Joi.required(),
    }),
    facilitiesList: Joi.string().when('type', {
      is: 'Accommodation',
      then: Joi.required(),
    }),
    roomsCount: Joi.string().when('type', {
      is: 'Accommodation',
      then: Joi.required(),
    }),
    roomOccupants: Joi.string().when('type', {
      is: 'Accommodation',
      then: Joi.required(),
    }),
    eventType: Joi.string().when('type', {
      is: 'Event Planning',
      then: Joi.required(),
    }),
    eventDescription: Joi.string().when('type', {
      is: 'Event Planning',
      then: Joi.required(),
    }),
    requireTicketSaleManagement: Joi.boolean().when('type', {
      is: 'Event Planning',
      then: Joi.required(),
    }),
    rental: Joi.objectId().when('type', { is: 'Rentals', then: Joi.required() }),
    tour: Joi.objectId().when('type', { is: 'Tours', then: Joi.required() }),
    pickUpLocation: Joi.string().when('type', {
      is: 'Tours',
      then: Joi.required(),
    }),
    carType: Joi.string().when('type', { is: 'Tours', then: Joi.required() }),
    event: Joi.objectId().when('type', {
      is: 'Event Tickets',
      then: Joi.required(),
    }),
    seatLocation: Joi.string().when('type', {
      is: 'Event Tickets',
      then: Joi.required(),
    }),
    ticketsCount: Joi.number()
      .integer()
      .when('type', { is: 'Event Tickets', then: Joi.required() }),
    origin: Joi.string().when('type', {
      is: 'Transfers',
      then: Joi.required(),
    }),
    destination: Joi.string().when('type', {
      is: 'Transfers',
      then: Joi.required(),
    }),
    transportType: Joi.string()
      .valid(
        'Flight (If Available b/w Locations)',
        'Exclusive Land Transport',
        'Public Land Transport'
      )
      .when('type', { is: 'Transfers', then: Joi.required() }),
    transportDescription: Joi.string().when('type', {
      is: 'Transfers',
      then: Joi.required(),
    }),
    adultsCount: Joi.string().when('type', [
      { is: 'Event Tickets', then: Joi.optional() },
      {
        is: Joi.string().valid(
          'Packages',
          'Accommodation',
          'Event Planning',
          'Rentals',
          'Tours',
          'Transfers'
        ),
        then: Joi.required(),
      },
    ]),
    childrenCount: Joi.string().when('type', [
      { is: 'Event Tickets', then: Joi.optional() },
      {
        is: Joi.string().valid(
          'Packages',
          'Accommodation',
          'Event Planning',
          'Rentals',
          'Tours',
          'Transfers'
        ),
        then: Joi.required(),
      },
    ]),
    infantCount: Joi.string().when('type', [
      { is: 'Event Tickets', then: Joi.optional() },
      {
        is: Joi.string().valid(
          'Packages',
          'Accommodation',
          'Event Planning',
          'Rentals',
          'Tours',
          'Transfers'
        ),
        then: Joi.required(),
      },
    ]),
    checkIn: Joi.when('type', [
      { is: 'Tours', then: Joi.optional() },
      { is: 'Event Tickets', then: Joi.optional() },
      { is: 'Transfers', then: Joi.optional() },
      {
        is: Joi.string().valid(
          'Packages',
          'Accommodation',
          'Event Planning',
          'Rentals'
        ),
        then: Joi.required(),
      },
    ]),
    checkOut: Joi.when('type', [
      { is: 'Tours', then: Joi.optional() },
      { is: 'Event Tickets', then: Joi.optional() },
      { is: 'Transfers', then: Joi.optional() },
      {
        is: Joi.string().valid(
          'Packages',
          'Accommodation',
          'Event Planning',
          'Rentals'
        ),
        then: Joi.required(),
      },
    ]),
    date: Joi.when('type', [
      { is: 'Tours', then: Joi.required() },
      { is: 'Transfers', then: Joi.required() },
      {
        is: Joi.string().valid(
          'Packages',
          'Accommodation',
          'Event Planning',
          'Rentals',
          'Event Tickets'
        ),
        then: Joi.optional(),
      },
    ]),
    time: Joi.when('type', [
      { is: 'Tours', then: Joi.required() },
      { is: 'Transfers', then: Joi.required() },
      {
        is: Joi.string().valid(
          'Packages',
          'Accommodation',
          'Event Planning',
          'Rentals',
          'Event Tickets'
        ),
        then: Joi.optional(),
      },
    ]),
    status: Joi.string()
      .valid('Pending Approval', 'Accepted', 'Rejected', 'Active', 'Complete')
      .default('Pending Approval'),
  });

  return bookingSchema.validate(booking);
}

module.exports = { Booking, validateBooking };
