const router = require('express').Router();

const { Usuario } = require('../db')

const usuarioController = require('./usuario.controller');

// router.get('/', async (req, res) => {
//     try {
//         const user = await Usuario.findAll();
//         console.log(user)
//         res.status(200).json(user)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

router.get('/', usuarioController.getUsuarios);
router.post('/', usuarioController.addUsuarios);

module.exports = router;