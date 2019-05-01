import { Router } from 'express'
import ProductService from '../services/products'

const router = Router()

router.get('/products', async (req,res) => {
  const products = await ProductService.getProducts(req.params)
  return res.status(200).send({ data: products })
})


router.post('/products', async (req,res) => {
  const products = await ProductService.addProduct(req.body)
  return res.status(200).send({ data: products })
})

module.exports = router
