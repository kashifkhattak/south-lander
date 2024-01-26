const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const accommodationDetailController = require('../controllers/accommodationDetail.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], accommodationDetailController.createAccomodationDetail);
router.get('/', accommodationDetailController.getAccomodationDetails);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], accommodationDetailController.updateAccomodationDetail);
router.delete('/:id',[authenticationMiddleware, authorizationMiddleware], accommodationDetailController.deleteAccomodationDetail);

module.exports = router;
