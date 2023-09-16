const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const tourController = require('../controllers/tour.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], tourController.createTour);
router.get('/', tourController.getTours);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], tourController.updateTour);
router.put('/disable/:id', [authenticationMiddleware, authorizationMiddleware], tourController.disableTour);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], tourController.deleteTour);

module.exports = router;
