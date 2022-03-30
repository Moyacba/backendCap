const router = require('express').Router();

const productController = require('./product.controller');

router.get('/', productController.getAllProduct);
router.get('/saleCart', productController.getSaleProducts);
router.post('/', productController.AddProduct);
router.put('/', productController.PutProduct);

module.exports = router;