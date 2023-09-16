const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const eventPlanningController = require('../controllers/eventPlanning.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], eventPlanningController.createEventPlanning);
router.get('/', eventPlanningController.getEventPlannings);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], eventPlanningController.updateEventPlanning);
router.put('/disable/:id', [authenticationMiddleware, authorizationMiddleware], eventPlanningController.disableEventPlanning);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], eventPlanningController.deleteEventPlanning);

module.exports = router;
