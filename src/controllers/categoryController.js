const categoryService = require('../services/categoryService');

const userController = {
  findAll: async (req, res) => {
    const { categories } = await categoryService.findAll();
    res.status(200).json(categories);
  },
};

module.exports = userController;
