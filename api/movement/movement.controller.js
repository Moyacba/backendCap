const { Movement } = require('../db')

module.exports = {

    getAllMovement: async(req, res) => {
        try {
            const movement = await Movement.findAll();
            res.status(200).json(movement)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    postMovement: async(req, res) => {
        try {
            await Movement.create(req.body)
            res.status(200).json('Movimiento creado')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    },
}