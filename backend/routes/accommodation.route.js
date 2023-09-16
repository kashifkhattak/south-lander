const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const accommodationController = require('../controllers/accommodation.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], accommodationController.createAccomodation);
router.get('/', accommodationController.getAccomodations);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], accommodationController.updateAccomodation);
router.put('/disable/:id', [authenticationMiddleware, authorizationMiddleware], accommodationController.disableAccomodation);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], accommodationController.deleteAccomodation);

module.exports = router;
