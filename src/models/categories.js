import mongoose from 'mongoose'

const CategoriesModel = new mongoose.Schema({
  name: { type: String, required: [true, 'name is required'] },
  slug: { type: String, required: [true, 'slug is required'] },
  created: { type: Date, default: Date.now },
  deleted: { type: Date, default: null }
})

export default mongoose.model('Categories', CategoriesModel)