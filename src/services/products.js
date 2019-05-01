import ProductModel from '../models/products'

const getProducts = async (params) => {
  const products = ProductModel.find(params).populate('categories')
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