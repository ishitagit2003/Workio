const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validateUser = require('../middleware/validator');
const authenticate = require('../middleware/auth');

router.get('/worko/user', authenticate, userController.listUsers);
router.get('/worko/user/:userId', authenticate, userController.getUserDetails);
router.post('/worko/user', authenticate, validateUser, userController.createUser);
router.put('/worko/user/:userId', authenticate, validateUser, userController.updateUser);
router.patch('/worko/user/:userId', authenticate, validateUser, userController.patchUser);
router.delete('/worko/user/:userId', authenticate, userController.deleteUser);

module.exports = router;
