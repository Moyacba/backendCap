const moment = require('moment');
moment.locale('es')

module.exports = (sequelize, type) => {
    return sequelize.define('venta', {
        idVenta: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente: type.STRING,
        total: type.INTEGER,
        pago: type.STRING,
        estado: type.STRING,
        productos: type.JSON,
        detalles: type.STRING,
        createdAt: {
            type: type.DATE,             
            get() {
                return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY HH:mm:ss');
            }
        },
        updatedAt: {
            type: type.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY HH:mm:ss');
            }
        }
    })
};