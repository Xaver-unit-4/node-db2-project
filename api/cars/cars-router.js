// DO YOUR MAGIC
const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
  res.json('get a list of all the cars')
})

router.get('/:id', (req, res, next) => {
  res.json(`get a single car with id ${req.params.id}`)
})

router.post('/', (req, res, next) => {
  res.json('create a new car')
})

module.exports = router;