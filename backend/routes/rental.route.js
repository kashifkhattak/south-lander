const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const rentalController = require('../controllers/rental.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], rentalController.createRental);
router.get('/', authenticationMiddleware, rentalController.getRentals);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], rentalController.updateRental);
router.put('/disable/:id', [authenticationMiddleware, authorizationMiddleware], rentalController.disableRental);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], rentalController.deleteRental);

module.exports = router;
