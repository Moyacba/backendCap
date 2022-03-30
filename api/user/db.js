const Sequelize = require('sequelize');

const productModel = require('../product/product.model');

const sequelize = new Sequelize('asdasd', 'asdasda', 'asdasdasd', {
    host: 'asdasd',
    dialect: 'mysql'
});

const Product = productModel(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(()=>{
        console.log('Tablas sincronizadas')
    })

module.exports = {
    Product
}