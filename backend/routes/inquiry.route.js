const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const inquiryController = require('../controllers/inquiry.controller');

router.post('/', authenticationMiddleware, inquiryController.createInquiry);
router.get('/', [authenticationMiddleware, authorizationMiddleware], inquiryController.getInquiries);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], inquiryController.updateInquiry);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], inquiryController.deleteInquiry);

module.exports = router;
