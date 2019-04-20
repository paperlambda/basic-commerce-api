import CategoriesModel from "../models/categories";

const createCategory = async (body) => {
  const category = new CategoriesModel(body)
  return await category.save()
}

const getCategories = async (params) => {
  const categories = CategoriesModel.find()
  return await categories
}

export default {
  createCategory,
  getCategories
}