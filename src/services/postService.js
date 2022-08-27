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
};

module.exports = postService;
