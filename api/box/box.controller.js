const { Box } = require('../db')

module.exports = {

    getAllBox: async(req, res) => {
        try {
            const box = await Box.findAll();
            res.status(200).json(box)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    postBox: async(req, res) => {
        try {
            await Box.create(req.body)
            res.status(200).json('Caja creada')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    },

    getIdBox: async (req, res) => {
        if (req.params.id == 1) {
            try {
                console.log(req.params.id)
                const boxId = await Box.findByPk(req.params.id)
                res.status(200).json(boxId.estado)
            } catch (error) {
                res.status(500).json(error)
                console.log(error)
            }
        }
        else{
            console.log('Mostrar ultimo')
            try {
                const {count} = await Box.findAndCountAll({
                    where: { active: 1}
                })
                res.status(200).json(count)
            } catch (error) {
                res.status(500).json(error)
                console.log(error)
            }
        }
    },

    getIdBox: async (req, res) => {
        try {
            const ultBox = await Box.findByPk(req.params.id)
            res.status(200).json(ultBox)
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    },

    putBox: async (req, res) => {
        try {
            console.log('--------------------------------------')
            console.log(req.body)
            console.log('--------------------------------------')
            await Box.update({
                active: req.body.active,
                turno: req.body.turno,
                inicio: req.body.inicio,
                efectivoV: req.body.efectivoV,
                debitoV: req.body.debitoV,
                creditoV: req.body.creditoV,
                efectivoS: req.body.efectivoS,
                debitoS: req.body.debitoS,
                creditoS: req.body.creditoS,
                gastos: req.body.gastos,
                devolucion: req.body.devolucion,
            },
            {
                where: {
                    idBox: req.body.idBox
                }
            })
            res.status(200).json('Caja actualizada')
        } catch (error) {
            res.status(500).json(error)
        }
    }
}