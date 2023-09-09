const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const bookingController = require('../controllers/booking.controller');

router.post('/', authenticationMiddleware, bookingController.createBooking);
router.get('/me', authenticationMiddleware, bookingController.getMyBookings);
router.get('/', [authenticationMiddleware, authorizationMiddleware], bookingController.getBookings);
router.put('/me/:id', authenticationMiddleware, bookingController.updateMyBooking);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], bookingController.updateBooking);
router.delete('/me/:id', authenticationMiddleware, bookingController.deleteMyBooking);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], bookingController.deleteBooking);

module.exports = router;
