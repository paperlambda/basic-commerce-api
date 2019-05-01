import { Router } from 'express'
import ProductService from '../services/products'

const router = Router()

router.get('/products', async (req,res) => {
  const products = await ProductService.getProducts(req.params)
  return res.status(200).send({ data: products })
})


router.get('/products/:slug', async (req, res) => {
  const product = await ProductService.getProducts(req.params)
  return res.status(200).send({ data: product })
})

router.patch('/products/:slug', async (req, res) => {
  const response = await ProductService.patchProduct({ slug: req.params.slug, ...req.body })
  return res.status(200).send({ data: response })
})

router.post('/products', async (req,res) => {
  const products = await ProductService.addProduct(req.body)
  return res.status(200).send({ data: products })
})

router.delete('/products/:slug', async (req, res) => {
  try {
    await ProductService.deleteProduct(req.params)
    return res.status(204).send({ status: 'success' })
  } catch (error) {
    return res.send({ error })
  }
})

module.exports = router
