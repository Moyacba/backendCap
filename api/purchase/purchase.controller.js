const { Purchase } = require('../db')

module.exports = {

    getAllPurchase: async(req, res) => {
        try {
            const purchase = await Purchase.findAll();
            console.log('ok')
            res.status(200).json(purchase)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    postPurchase: async(req, res) => {
        try {
            await Purchase.create(req.body)
            res.status(200).json('Compra registrada con exito')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    },
}