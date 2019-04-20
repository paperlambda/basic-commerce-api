import mongoose from 'mongoose'

const CategoriesModel = new mongoose.Schema({
  name: String,
})

export default mongoose.model('Categories', CategoriesModel)