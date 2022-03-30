const router = require('express').Router();
//const auth = require('./auth');
const userController = require('./user.controller');

router.route('/logout/:id').get(userController.LogOut);
router.route('/').post(userController.SingUp);
router.route('/login').post(userController.LogIn);
router.route('/').get(userController.findAll);

module.exports = router;