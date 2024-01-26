const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const eventTicketDetailController = require('../controllers/eventTicketDetail.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], eventTicketDetailController.createEventTicketDetail);
router.get('/', eventTicketDetailController.getEventTicketDetails);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], eventTicketDetailController.updateEventTicketDetail);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], eventTicketDetailController.deleteEventTicketDetail);

module.exports = router;
