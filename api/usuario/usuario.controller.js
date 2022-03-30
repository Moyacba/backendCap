const { Usuario } = require('../db');

module.exports = {
    getUsuarios: async (req, res) => {
        try {
            const users = await Usuario.findAll();
            res.status(200).json(users)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    addUsuarios: async (req, res) => {
        try {
            await Usuario.create(req.body)
            res.status(200).json('Usuario creado con exito')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}