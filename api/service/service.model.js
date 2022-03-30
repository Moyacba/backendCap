const moment = require('moment');
moment.locale('es')

module.exports = (sequelize, type) => {
    return sequelize.define('servicio', {
        idServicio: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cliente: type.STRING,
        telefono: type.STRING,
        producto: type.STRING,
        categoria: type.STRING,
        motivo: type.STRING,
        presupuesto: type.INTEGER,
        repuesto: type.INTEGER,
        pago: type.STRING,
        estado: type.STRING,
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
};