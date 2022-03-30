const moment = require('moment')

module.exports = (sequelize, type) => {
    return sequelize.define('product', {
        idProduct: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria: type.STRING,
        producto: type.STRING,
        precioCompra: type.INTEGER,
        precioVenta: type.INTEGER,
        stock: type.INTEGER,
        proveedor: type.STRING,
        detalles: type.STRING,
        createdAt: {
            type: type.DATE,             
            get() {
                return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY');
            }
        },
        updatedAt: {
            type: type.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY');
            }
        }
    })
};
