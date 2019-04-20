import ProductModel from '../models/products'

const getProducts = async (params) => {
  const products = ProductModel.find(params)
  return await products
}

const addProduct = async (body) => {
  const product = new ProductModel(body)
  return await product.save()
}

export default {
  getProducts,
  addProduct
}