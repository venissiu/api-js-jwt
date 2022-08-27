const { Category } = require('../database/models');

const categoryService = {
    findAll: async () => {
        const categories = await Category.findAll();
        return { categories };
      },
      create: async (newCategory) => {
        console.log(newCategory);
        const createdCategory = await Category.create(newCategory);
        return createdCategory;
    },
};

module.exports = categoryService;