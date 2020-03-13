const Product = require('../models/product')

function crearProducto (req, res) {
  var producto = new Product

  producto.name = req.body.name
  producto.price = req.body.price
  producto.mark = req.body.mark
  producto.category = req.body.category
  producto.img = req.body.img
  
  producto.save((err, prodcutSaved) => {
    if(err){
      res.send(`Hubo un error creando el producto: ${err}`).status(500)
    }

    res.send({prodcutSaved}).status(200)
  })
}

function obtenerProductos (req, res) {
  Product.find({}, (err, products) => {
    if(err){
      res.send(`Hubo un error creando el producto: ${err}`).status(500)
    }
    if(!products){
      res.send('No se encontro nada').status(404)
    }
    res.send({products}).status(200)
  })
}

module.exports = {
  crearProducto,
  obtenerProductos
}
