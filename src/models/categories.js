import mongoose from 'mongoose'

const CategoriesModel = new mongoose.Schema({
  name: String,
  slug: String
})

export default mongoose.model('Categories', CategoriesModel)