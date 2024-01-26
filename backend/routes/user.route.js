const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication');
const authorizationMiddleware = require('../middlewares/authorization');
const userController = require('../controllers/user.controller');

router.post('/', userController.registerUser);
router.post(
  '/admin',
  [authenticationMiddleware, authorizationMiddleware],
  userController.registerAdmin
);
router.get('/me', authenticationMiddleware, userController.getMyUser);
router.get('/', [authenticationMiddleware, authorizationMiddleware], userController.getAllUsers);
router.put('/me', authenticationMiddleware, userController.updateMyUser);
router.put(
  '/disable/:id',
  [authenticationMiddleware, authorizationMiddleware],
  userController.disableUser
);
router.delete(
  '/:id',
  [authenticationMiddleware, authorizationMiddleware],
  userController.deleteUser
);

module.exports = router;
