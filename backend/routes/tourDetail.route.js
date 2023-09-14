const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const tourDetailController = require('../controllers/tourDetail.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], tourDetailController.createTourDetail);
router.get('/',  tourDetailController.getTourDetails);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], tourDetailController.updateTourDetail);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], tourDetailController.deleteTourDetail);

module.exports = router;
