const { Notes } = require('../db')

module.exports = {

    getAllNotes: async(req, res) => {
        try {
            const notes = await Notes.findAll();
            res.status(200).json(notes)
        } catch (error) {
            res.status(500).send(error)
        }
    },

    postNotes: async(req, res) => {
        try {
            await Notes.create(req.body)
            res.status(200).json('Nota creada')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    },

    deleteNote: async(req, res) => {
        try {
            console.log(req.body)
            await Notes.destroy({
                where: {
                    text: req.body.text
                }
            })
            res.status(200).json('Nota Eliminada')
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    }
}