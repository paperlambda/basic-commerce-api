import mongoose from 'mongoose'

const CategoriesModel = new mongoose.Schema({
  name: String,
  slug: String,
  created: { type: Date, default: Date.now },
  deleted: { type: Date, default: null }
})

export default mongoose.model('Categories', CategoriesModel)