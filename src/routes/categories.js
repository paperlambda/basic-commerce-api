import express from 'express'
import categoriesService from '../services/categories'

const router = express.Router()

router.get('/categories', async (req, res, next) => {
  try {
    const response = await categoriesService.getCategories(req.params)
    return res.status(200).send({ data: response })
  } catch (error) {
    next(error)
  }
})

router.get('/categories/:slug', async (req, res, next) => {
  try {
    const response = await categoriesService.getCategories(req.params)
    if(!response){
      next(new Error('NOT_FOUND'))
      return
    }
    return res.status(200).send({ data: response })
  } catch (error) {
    next(error)
  }
})

router.patch('/categories/:slug', async (req,res, next) => {
  try {
    const response = await categoriesService.patchCategory({ slug: req.params.slug, ...req.body })
    if(!response){
      next(new Error('NOT_FOUND'))
      return
    }
    return res.status(200).send({ data: response })
  } catch (error) {
    next(error)
  }
})

router.post('/categories', async (req, res, next) => {
  try {
    const response = await categoriesService.createCategory(req.body)
    if (response) {
      return res.status(200).send({ data: response })
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/categories/:slug', async (req, res, next) => {
  try {
    const response = await categoriesService.deleteCategory(req.params)
    if(response.deletedCount === 0) {
      next(new Error('NOT_FOUND'))
      return
    }
    return res.status(204).send({ status: 'success' })
  } catch (error) {
    next(error)
  }
})

module.exports = router