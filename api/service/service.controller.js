const { Servicio } = require('../db');

module.exports = {

    getAllService: async(req, res) => {
        try {
            const servicios = await Servicio.findAll();
            res.status(200).json(servicios)
        } catch (error) {
            res.state(500).send(error)
        }
    },
    getService: async(req, res) => {
        try {
            res.status(200).json(servicios)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    postService: async(req, res) => {
        try {
            await Servicio.create(req.body);
            res.status(200).json('Servicio técnico registrado!')
        } catch (error) {
            res.status(500).send(error)
        }
    },
    putService: async(req, res) => {
        console.log(req.body)
        try {
            await Servicio.update({
                estado: req.body.estado,
                presupuesto: req.body.presupuesto
            },
            {
                where: {
                    idServicio: req.body.idService
                }
            })
            res.status(200).json('Servicio actualizado')
        } catch (error) {
            res.status(500).send(error)
        }
    },
}