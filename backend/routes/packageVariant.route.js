const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const packageVariantController = require('../controllers/packageVariant.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], packageVariantController.createPackageVariant);
router.get('/', packageVariantController.getPackageVariants);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], packageVariantController.updatePackageVariant);
router.put('/disable/:id', [authenticationMiddleware, authorizationMiddleware], packageVariantController.disablePackageVariant);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], packageVariantController.deletePackageVariant);

module.exports = router;
