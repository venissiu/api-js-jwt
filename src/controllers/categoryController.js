const categoryService = require('../services/categoryService');
const rescue = require('../rescue');

const userController = {
  findAll: rescue(async (req, res) => {
    const { categories } = await categoryService.findAll();
    res.status(200).json(categories);
  }),
  create: rescue(async (req, res) => {
    const newCategory = req.body;
    if (!newCategory.name) {
        return res.status(400).json({ message: '"name" is required' });
    }
    const category = await categoryService.create(newCategory);
    res.status(201).json(category);
  }),
};

module.exports = userController;
