import ProductModel from '../models/products'
import slugify from '../helper/slugify';

const getProducts = async (params) => {
  if(params.slug){
    return await ProductModel.findOne({ slug: params.slug }).populate('categories')
  }
  const products = ProductModel.find(params).populate('categories')
  return await products
}

const addProduct = async (body) => {
  if(!body.slug) {
    body.slug = slugify(body.name)
  }
  
  const product = new ProductModel(body)
  return await product.save()
}

const patchProduct = async (body) => {
  const product = ProductModel.updateOne({ slug: body.slug }, body)
  if(product){
    return await getProducts(body.slug)
  }
}

const deleteProduct = async (params) => {
  return await ProductModel.updateOne({ slug: params.slug }, { deleted: new Date() })
}

export default {
  getProducts,
  addProduct,
  patchProduct,
  deleteProduct
}