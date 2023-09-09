const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const eventPlanningDetailController = require('../controllers/eventPlanningDetail.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], eventPlanningDetailController.createEventPlanningDetail);
router.get('/', authenticationMiddleware, eventPlanningDetailController.getEventPlanningDetails);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], eventPlanningDetailController.updateEventPlanningDetail);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], eventPlanningDetailController.deleteEventPlanningDetail);

module.exports = router;
