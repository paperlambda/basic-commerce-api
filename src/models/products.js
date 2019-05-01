import { Schema, model } from 'mongoose'

const ProductModel = new Schema({
  name: String,
  slug: String,
  stock: Number,
  categories: [{ type: Schema.Types.ObjectId, ref: 'Categories' }]
})

export default model('Product', ProductModel)