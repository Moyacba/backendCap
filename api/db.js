const Sequelize = require('sequelize')

const productModel = require('./product/product.model')
const ventaModel = require('./sale/sale.model');
const usuarioModel = require('./usuario/usuario.model')
const servicioModel = require('./service/service.model')
const movementModel = require('./movement/movement.model')
const purchaseModel = require('./purchase/purchase.model')
const notesModel = require('./notes/notes.model')
const boxModel = require('./box/box.model')

const sequelize = new Sequelize ('modotecnodb', 'root', 'm39623718', {
    host: 'localhost',
    dialect: 'mysql',
    useUTC: true,
    timezone: '+03:00',
    operatorsAliases: false
});

const Producto = productModel(sequelize, Sequelize);
const Venta = ventaModel(sequelize, Sequelize);
const Usuario = usuarioModel(sequelize, Sequelize);
const Servicio = servicioModel(sequelize, Sequelize);
const Movement = movementModel(sequelize, Sequelize);
const Purchase = purchaseModel(sequelize, Sequelize);
const Notes = notesModel(sequelize, Sequelize);
const Box = boxModel(sequelize, Sequelize);

sequelize.sync({ force: false})
    .then(()=>{
        console.log('Tablas sincronizadas!')
    });

module.exports = {
    Producto, Usuario, Venta, Servicio, Movement, Purchase, Notes, Box
}