const express = require('express');
const router = express.Router();

const productRoute = require('./product/product.route');
const userRoute = require('./usuario/usuario.route');
const saleRoute = require('./sale/sale.router');
const serviceRoute = require('./service/service.router');
const movementRoute = require('./movement/movement.route')
const purchaseRoute = require('./purchase/purchase.router')
const notesRoute = require('./notes/notes.router')
const boxRoute = require('./box/box.route')

router.use('/api/product', productRoute);
router.use('/api/user', userRoute);
router.use('/api/sale', saleRoute);
router.use('/api/service', serviceRoute);
router.use('/api/movement', movementRoute);
router.use('/api/purchase', purchaseRoute)
router.use('/api/notes', notesRoute)
router.use('/api/box', boxRoute)

module.exports = router;