const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/material', (req, res) => {
  res.status(200).send({ material: 'somestuff about material'})
})
app.get('/equipment', (req, res) => {
  res.status(200).send({ material: 'somestuff about equipment'})
})

app.get('/equipment/:equipmentid', (req, res) => {
  res.status(200).send({ material: 'somestuff about equipment ' + req.params.equipmentid})
})


app.listen(port, () => console.log(`EX2 - Example app listening on port ${port}!`))