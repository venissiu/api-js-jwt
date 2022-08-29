const jwt = require('jsonwebtoken');
const {
  BlogPost,
  User,
  Category,
} = require('../database/models');
const categoryService = require('./categoryService');
const postCategoryService = require('./postCategoryService');

const segredo = process.env.JWT_SECRET;

const postService = {
  findAll: async () => {
    const posts = await BlogPost.findAll({
      attributes: { exclude: ['userId'] },
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          attributes: ['id', 'name'],
        },
      ],
    });
    return { posts };
  },
  findById: async (id) => {
    const post = await BlogPost.findByPk(id, {
      attributes: { exclude: ['userId'] },
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          attributes: ['id', 'name'],
        },
      ],
    });
    return { post };
  },
  create: async (newPostBlog, token) => {
    const decoded = jwt.verify(token, segredo);
    const { categoryIds } = newPostBlog;
    const userId = decoded.data.id;
    const test = await Promise.all(categoryIds.map((id) => categoryService.findById(id)));
    const verifyIfCategoriesExists = test.some((category) => category.category === null);
    if (verifyIfCategoriesExists) {
    return { code: 400, error: '"categoryIds" not found' };
  }
    const postCreated = await BlogPost.create({
      title: newPostBlog.title,
      content: newPostBlog.content,
      userId,
      published: new Date(),
      updated: new Date(),
    });
    await postCategoryService.createRelations(postCreated.dataValues.id, categoryIds);
    return postCreated;
  },
};

module.exports = postService;
