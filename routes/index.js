const express = require('express')
const productCtrl = require('../controllers/productCtlr')
const api = express.Router()

api.get('/1', (req, res) => {
  res.send('Hola we').status(200)
})

api.post('/productos/crear', productCtrl.crearProducto)
api.get('/productos/all', productCtrl.obtenerProductos)

module.exports = api
