const router = require('express').Router();
const serviceController = require('./service.controller');

router.get('/', serviceController.getAllService);
router.get('/', serviceController.getService);
router.post('/', serviceController.postService);
router.put('/', serviceController.putService);

module.exports = router;