const router = require('express').Router();
const saleController = require('./sale.controller');

router.get('/', saleController.getAllSale);
router.post('/', saleController.postSale)

module.exports = router;