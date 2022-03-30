const { Producto } = require('../db');

module.exports = {

    getAllProduct: async(req, res) => {
        try {
            const products = await Producto.findAll();
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
            console.log(error)
        }
    },
    getSaleProducts: async(req, res) => {
        try {
            const products = await Producto.findAll({attributes:['producto']})
            res.status(200).json(products)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    AddProduct: async(req, res) => {
        try {
            await Producto.create(req.body)
            res.status(200).json('Producto agregado con éxito')
        } catch (error) {
            res.status(500).send(error)
        }
    },

    PutProduct: async(req, res) => {
        try {
            console.log(req.body)
            await Producto.update({
                producto: req.body.producto,
                categoria: req.body.categoria,
                stock: req.body.stock,
                precioCompra: req.body.precioCompra,
                precioVenta: req.body.precioVenta,
                proveedor: req.body.proveedor,
                detalles: req.body.detalles,
            },
            {
                where: {
                    idProduct: req.body.idProduct
                }
            })
            res.status(200).json('Producto actualizado')
        } catch (error) {
            res.status(500).send(error)
        }
    },

    PutSaleProduct: async(req, res) => {
        try {
            await Producto.update({
                stock: req.body.stock
            },{
                where: {
                    idProduct: req.body.idProduct
                }
            })
        } catch (error) {
            res.status(500).send(error)
        }
    }
}