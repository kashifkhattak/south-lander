const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const packageController = require('../controllers/package.controller');

router.post('/', [authenticationMiddleware, authorizationMiddleware], packageController.createPackage);
router.get('/', authenticationMiddleware, packageController.getPackages);
router.put('/:id', [authenticationMiddleware, authorizationMiddleware], packageController.updatePackage);
router.put('/disable/:id', [authenticationMiddleware, authorizationMiddleware], packageController.disablePackage);
router.delete('/:id', [authenticationMiddleware, authorizationMiddleware], packageController.deletePackage);

module.exports = router;
