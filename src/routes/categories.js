import express from 'express'
import categoriesService from '../services/categories'

const router = express.Router()

router.get('/categories', async (req, res) => {
  const response = await categoriesService.getCategories()
  return res.status(200).send({ data: response })
})

router.post('/categories', async (req, res) => {
  const response = await categoriesService.createCategory(req.body)
  if (response) {
    return res.status(200).send({ data: response })
  }
})

module.exports = router