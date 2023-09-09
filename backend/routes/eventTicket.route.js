const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const eventTicketController = require('../controllers/eventTicket.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], eventTicketController.createEventTicket);
router.get('/', authenticationMiddleware, eventTicketController.getEventTickets);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], eventTicketController.updateEventTicket);
router.put('/disable/:id', [authenticationMiddleware, authorizationMiddleware], eventTicketController.disableEventTicket);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], eventTicketController.deleteEventTicket);

module.exports = router;
