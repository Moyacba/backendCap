const router = require('express').Router();

const boxController = require('./box.controller')

router.get('/', boxController.getAllBox);
router.get('/:id', boxController.getIdBox);
router.post('/', boxController.postBox);
router.put('/', boxController.putBox);

module.exports = router;