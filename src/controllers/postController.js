const postService = require('../services/postService');

const postController = {
  findAll: async (req, res) => {
    const { posts } = await postService.findAll();
    res.status(200).json(posts);
  },
  findById: async (req, res) => {
    const { post } = await postService.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    res.status(200).json(post);
  },
};

module.exports = postController;
