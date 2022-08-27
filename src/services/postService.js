const { BlogPost, User, Category } = require('../database/models');

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
};

module.exports = postService;
