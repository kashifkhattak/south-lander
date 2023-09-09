const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const variantDetailController = require('../controllers/variantDetail.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], variantDetailController.createVariantDetail);
router.get('/', authenticationMiddleware, variantDetailController.getVariantDetails);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], variantDetailController.updateVariantDetail);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], variantDetailController.deleteVariantDetail);

module.exports = router;
