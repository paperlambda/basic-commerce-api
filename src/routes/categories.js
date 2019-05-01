import express from 'express'
import categoriesService from '../services/categories'

const router = express.Router()

router.get('/categories', async (req, res) => {
  const response = await categoriesService.getCategories()
  return res.status(200).send({ data: response })
})

router.get('/categories/:slug', async (req,res) => {
  const response = await categoriesService.getCategories(req.params)
  return res.status(200).send({ data: response })
})

router.patch('/categories/:slug', async (req,res) => {
  const response = await categoriesService.patchCategory({ slug: req.params.slug, ...req.body })
  return res.status(200).send({ data: response })
})

router.post('/categories', async (req, res) => {
  const response = await categoriesService.createCategory(req.body)
  if (response) {
    return res.status(200).send({ data: response })
  }
})

module.exports = router