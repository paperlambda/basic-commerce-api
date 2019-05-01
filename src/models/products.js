import { Schema, model } from 'mongoose'

const ProductModel = new Schema({
  name: String,
  slug: String,
  stock: Number,
  categories: [{ type: Schema.Types.ObjectId, ref: 'Categories' }],
  created: { type: Date, default: Date.now },
  deleted: { type: Date, default: null }
})

export default model('Product', ProductModel)