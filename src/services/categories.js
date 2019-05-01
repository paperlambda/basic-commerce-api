import CategoriesModel from "../models/categories";
import slugify from "../helper/slugify";

const createCategory = async (body) => {
  if(body.name && !body.slug) {
    body.slug = slugify(body.name)
  }

  const category = new CategoriesModel(body)
  return await category.save()
}

const getCategories = async (params) => {
  if(params.slug) {
    return await CategoriesModel.findOne({ slug: params.slug })
  }

  const categories = CategoriesModel.find({ deleted: null })
  return await categories
}

const patchCategory = async (body) => {
  const update = await CategoriesModel.updateOne({ slug: body.slug }, body, { runValidators: false })
  if(update){
    return getCategories(body)
  }
}

const deleteCategory = async (params) => {
  return await CategoriesModel.updateOne({ slug: params.slug }, { deleted: new Date() }, { runValidators: false })
}

export default {
  createCategory,
  getCategories,
  patchCategory,
  deleteCategory
}