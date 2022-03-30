const router = require('./product.route');
const productRoute = require('./product.route');

router.use('/product', productRoute)

module.exports = productRoute;