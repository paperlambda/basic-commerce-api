import { Router } from 'express'
import ProductService from '../services/products'

const router = Router()

router.get('/products', (req,res) => {
  const products = ProductService.getProducts()
  return res.status(200).send({ data: products })
})


router.post('/products', (req,res) => {
  const products = ProductService.addProduct(req.body)
  return res.status(200).send({ data: products })
})

module.exports = router
