const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const rentalDetailController = require('../controllers/rentalDetail.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], rentalDetailController.createRentalDetail);
router.get('/', rentalDetailController.getRentalDetails);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], rentalDetailController.updateRentalDetail);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], rentalDetailController.deleteRentalDetail);

module.exports = router;
