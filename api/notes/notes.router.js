const router = require('express').Router();

const notesController = require('./notes.controller')

router.get('/', notesController.getAllNotes);
router.post('/', notesController.postNotes);
router.put('/', notesController.deleteNote);

module.exports = router;