const categoryService = require('../services/categoryService');

const userController = {
  findAll: async (req, res) => {
    const { categories } = await categoryService.findAll();
    res.status(200).json(categories);
  },
  create: async (req, res) => {
    const newCategory = req.body;
    if (!newCategory.name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const category = await categoryService.create(newCategory);
    res.status(201).json(category);
  },
};

module.exports = userController;
