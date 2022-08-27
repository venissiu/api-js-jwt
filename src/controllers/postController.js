const postService = require('../services/postService');

const postController = {
  findAll: async (req, res) => {
    const { posts } = await postService.findAll();
    res.status(200).json(posts);
  },
};

module.exports = postController;
