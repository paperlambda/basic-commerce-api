import express from 'express'

const router = express.Router()

router.get('/categories', (req, res) => {
  return res.status(200).send({ data: [] })
})

router.post('/category', (req, res) => {
  return res.status(200).send({ data: req })
})

router.get('/category', (req, res) => {
  return res.status(200).send({data: {}})
})

module.exports = router