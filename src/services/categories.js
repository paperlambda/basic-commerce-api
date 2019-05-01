import CategoriesModel from "../models/categories";

const generateSlug = (name) => {
  return name.toString().toLowerCase().trim().replace(/&/g, '-and-').replace(/[\s\W-]+/g, '-')
}

const createCategory = async (body) => {
  if(!body.slug) {
    body.slug = generateSlug(body.name)
  }

  const category = new CategoriesModel(body)
  return await category.save()
}

const getCategories = async (params) => {
  if(params.slug) {
    return await CategoriesModel.findOne({ slug: params.slug })
  }

  const categories = CategoriesModel.find()
  return await categories
}

const patchCategory = async (body) => {
  const update = await CategoriesModel.updateOne({ slug: body.slug }, body)
  if(update){
    return getCategories(body)
  }
}

export default {
  createCategory,
  getCategories,
  patchCategory
}