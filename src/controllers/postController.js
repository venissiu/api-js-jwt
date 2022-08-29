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
  create: async (req, res) => {
    const token = req.headers.authorization;
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
      return res.status(400)
        .json({ message: 'Some required fields are missing' });
    }
    const post = await postService.create(req.body, token);
    if (post.code) {
      return res.status(post.code).json({ message: post.error });
    }
    res.status(201).json(post);
  },
};

module.exports = postController;
