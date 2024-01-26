const httpStatus = require('http-status-codes').StatusCodes;
const paymentData = require('../helpers/paymentData');
const { Booking, validateBooking } = require('../models/booking.model');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const bookingController = {
  createBooking: async (req, res) => {
    const { error } = validateBooking(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    let booking = new Booking(req.body);
    booking = await booking.save();

    res.status(httpStatus.CREATED).json(booking);
  },

  bookingPayment: async (req, res) => {
    const { error } = validateBooking(req.body);
    if (error) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: error.details[0].message });
    }

    const stripeData = await paymentData(req.body);

    if (!stripeData.totalPrice) {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'Something went wrong. Please try again!' });
    }

    let booking;

    if (stripeData.totalPrice > 0) {
      booking = new Booking({
        ...stripeData.booking,
        price: stripeData.totalPrice,
        userId: req.user._id,
      });
      booking = await booking.save();
    } else if (stripeData.totalPrice === 0) {
      let booking = new Booking({
        ...stripeData.booking,
        price: stripeData.totalPrice,
        status: 'Pending Approval',
        userId: req.user._id,
      });
      booking = await booking.save();

      return res.json(httpStatus.CREATED).json({
        message: 'Payment Successful! Your booking has been received.',
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: stripeData.paymentData.map((item) => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
            },
            unit_amount: item.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.CLIENT_URL}/booking?bookingId=${booking._id}&status=success`,
      cancel_url: `${process.env.CLIENT_URL}/booking?bookingId=${booking._id}&status=error`,
    });

    res.status(httpStatus.OK).json({ stripeURL: session.url });
  },

  getBookings: async (req, res) => {
    const queryParams = req.query;

    const dynamicQuery = {};
    const dateRangeKeys = ['checkIn', 'checkOut', 'date'];
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

    if (queryParams.checkIn) {
      dynamicQuery.checkIn = {
        $gte: new Date(queryParams.checkIn),
        $lte: new Date(),
      };
    }

    if (queryParams.checkOut) {
      dynamicQuery.checkOut = {
        $gte: new Date(queryParams.checkOut),
        $lte: new Date(),
      };
    }

    if (queryParams.date) {
      dynamicQuery.date = {
        $gte: new Date(queryParams.date),
        $lte: new Date(),
      };
    }

    const bookings = await Booking.find(dynamicQuery).select(projection);

    if (!bookings || bookings.length === 0) {
      console.log(
        `Bookings not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Bookings not found' });
    }

    res.status(httpStatus.OK).json(bookings);
  },

  getMyBookings: async (req, res) => {
    const queryParams = req.query;

    const dynamicQuery = {};
    const dateRangeKeys = ['checkIn', 'checkOut', 'date'];
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

    if (queryParams.checkIn) {
      dynamicQuery.checkIn = {
        $gte: new Date(queryParams.checkIn),
        $lte: new Date(),
      };
    }

    if (queryParams.checkOut) {
      dynamicQuery.checkOut = {
        $gte: new Date(queryParams.checkOut),
        $lte: new Date(),
      };
    }

    if (queryParams.date) {
      dynamicQuery.date = {
        $gte: new Date(queryParams.date),
        $lte: new Date(),
      };
    }

    dynamicQuery['userId'] = req.user._id;

    const bookings = await Booking.find(dynamicQuery).select(projection);

    if (!bookings || bookings.length === 0) {
      console.log(
        `Bookings not found with parameters: ${JSON.stringify(queryParams)}`
      );

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Bookings not found' });
    }

    res.status(httpStatus.OK).json(bookings);
  },

  updateBooking: async (req, res) => {
    const { id } = req.params;
    // const { error } = validateBooking(req.body);

    // if (error) {
    //   console.log(`Invalid data format: ${error}`);

    //   return res
    //     .status(httpStatus.BAD_REQUEST)
    //     .json({ error: `Invalid data format: ${error}` });
    // }

    const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedBooking) {
      console.log(`Booking not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Booking not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Booking updated',
      booking: updatedBooking,
    });
  },

  updateMyBooking: async (req, res) => {
    const { id } = req.params;
    // const { error } = validateBooking(req.body);

    // if (error) {
    //   console.log(`Invalid data format: ${error}`);

    //   return res
    //     .status(httpStatus.BAD_REQUEST)
    //     .json({ error: `Invalid data format: ${error}` });
    // }

    const updatedBooking = await Booking.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      req.body,
      {
        new: true,
      }
    );

    if (!updatedBooking) {
      console.log(`Booking not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Booking not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Booking updated',
      booking: updatedBooking,
    });
  },

  deleteBooking: async (req, res) => {
    const { id } = req.params;

    const deletedBooking = await Booking.findByIdAndRemove(id, req.body, {
      new: true,
    });

    if (!deletedBooking) {
      console.log(`Booking not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Booking not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Booking deleted',
      booking: deletedBooking,
    });
  },

  deleteMyBooking: async (req, res) => {
    const { id } = req.params;

    const deletedBooking = await Booking.findOneAndRemove(
      { _id: id, userId: req.user._id },
      req.body,
      {
        new: true,
      }
    );

    if (!deletedBooking) {
      console.log(`Booking not found with ID: ${id}`);

      return res
        .status(httpStatus.NOT_FOUND)
        .json({ error: 'Booking not found' });
    }

    res.status(httpStatus.OK).json({
      message: 'Booking deleted',
      booking: deletedBooking,
    });
  },
};

module.exports = bookingController;
