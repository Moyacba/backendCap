const router = require('express').Router();

const purchaseController = require('./purchase.controller')

router.get('/', purchaseController.getAllPurchase);
router.post('/', purchaseController.postPurchase);

module.exports = router;