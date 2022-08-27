const { Category } = require('../database/models');

const categoryService = {
    findAll: async () => {
        const categories = await Category.findAll();
        return { categories };
      },
};

module.exports = categoryService;