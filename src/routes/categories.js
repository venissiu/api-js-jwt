const express = require('express');
const category = require('../controllers/categoryController');
const validateJWT = require('../middlewares/auth/validateJWT');

const categoriesRouter = express.Router();

categoriesRouter.get('/', validateJWT, category.findAll);
categoriesRouter.post('/', validateJWT, category.create);

module.exports = categoriesRouter;
