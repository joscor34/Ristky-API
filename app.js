const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes/index')

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token')

  res.header('Access-Control-Expose-Headers', 'x-auth-token')

  next()
}) 

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', api)

module.exports = app