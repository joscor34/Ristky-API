const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema ({
  name: String,
  price: Number,
  img: String,
  mark: String,
  category: {
    type: String,
    enum: ['bebidas', 'alimentos']
  }
})

module.exports = mongoose.model('Product', productSchema)