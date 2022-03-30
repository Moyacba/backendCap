const moment = require('moment')

module.exports = (sequelize, type) => {
    return sequelize.define('compras', {
        idCompra: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        producto: type.STRING,
        categoria: type.STRING,
        cantidad: type.INTEGER,
        precio: type.INTEGER,
        proveedor: type.STRING,
        detalles: type.STRING,
        createdAt: {
            type: type.DATE,             
            get() {
                return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY hh:mm:ss');
            }
        },
        updatedAt: {
            type: type.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY hh:mm:ss');
            }
        }
    })
}