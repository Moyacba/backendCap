const { Venta } = require('../db');

module.exports = {

    getAllSale: async(req, res) => {
        try {
            const ventas = await Venta.findAll();
            res.status(200).json(ventas)
        } catch (error) {
            res.state(500).send(error)
        }
    },
    postSale: async(req, res) => {
        try {
            await Venta.create(req.body);
            console.log(req.body)
            res.status(200).json('Venta registrada!')
        } catch (error) {
            res.status(500).send(error)
        }
    }
}