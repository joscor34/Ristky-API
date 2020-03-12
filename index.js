const express = require('express')
const colors = require('colors')

var port = 8080

const app = express()

app.get('/', (req, res) => {
  console.log('Todo okay')
  res.status(200)
  res.json({ Hola: 'Bien hecho '})
})

app.get('/1', (req, res) => {
  console.log('Todo okay 1')
  res.status(200)
  res.json({ Hola: 'Bien hecho 1'})
})

app.listen(port, () => {
  console.log(colors.green('Tu servidor esta corriendo en: ') + colors.bgCyan(`http://localhost:${port}`))
})