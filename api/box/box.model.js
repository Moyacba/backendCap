const moment = require('moment')

module.exports = (sequelize, type) => {
    return sequelize.define('box', {
        idBox: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        active: type.BOOLEAN,
        turno: type.STRING,
        inicio: type.INTEGER,
        efectivoV: type.INTEGER,
        debitoV: type.INTEGER,
        creditoV: type.INTEGER,
        efectivoS: type.INTEGER,
        debitoS: type.INTEGER,
        creditoS: type.INTEGER,
        gastos: type.INTEGER,
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