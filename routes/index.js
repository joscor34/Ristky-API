const express = require('express')
const api = express.Router()

api.get('/1', (req, res) => {
  res.send('Hola we').status(200)
})

module.exports = api
