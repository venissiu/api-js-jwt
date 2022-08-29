const { Category } = require('../database/models');

const categoryService = {
  findAll: async () => {
    const categories = await Category.findAll();
    return { categories };
  },
  create: async (newCategory) => {
    const createdCategory = await Category.create(newCategory);
    return createdCategory;
  },
  findById: async (id) => {
    const category = await Category.findByPk(id);
    return { category };
  },
};

module.exports = categoryService;
