const router = require('express').Router();

const movementController = require('./movement.controller')

router.get('/', movementController.getAllMovement);
router.post('/', movementController.postMovement);

module.exports = router;