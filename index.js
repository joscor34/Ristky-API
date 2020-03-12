// Importamos las librerias necesarias
const colors = require('colors')
const mongoose = require('mongoose')

// Importamos la configacion de la API
const app = require('./app') 

// Configuramos nuestro archivo .env
require('dotenv').config()

var port = process.env.PORT

async function connect () {
  await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true})
  app.listen(port, () => {
    console.log(colors.green('Tu servidor esta corriendo en: ') + colors.bgCyan(`http://localhost:${port}`))
  })
}
connect()