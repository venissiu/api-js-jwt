const jwt = require('jsonwebtoken');
const postService = require('../services/postService');
const rescue = require('../helpers/rescue');

const segredo = process.env.JWT_SECRET;

const validateBody = (title, content, res) => {
  if (!title || !content) {
    res.status(400).json({ message: 'Some required fields are missing' });
    return false;
  }

  return true;
};

const postController = {
  findAll: rescue(async (req, res) => {
    const { posts } = await postService.findAll();
    res.status(200).json(posts);
  }),
  findById: rescue(async (req, res) => {
    const { post } = await postService.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    res.status(200).json(post);
  }),
  create: async (req, res) => {
    const token = req.headers.authorization;
    const { title, content, categoryIds } = req.body;
    const newPost = { title, content, categoryIds };
    if (!title || !content || !categoryIds) {
      return res.status(400)
        .json({ message: 'Some required fields are missing' });
    }
    const post = await postService.create(newPost, token);
    if (post.code) {
      return res.status(post.code).json({ message: post.error });
    }
    res.status(201).json(post);
  },
  delete: rescue(async (req, res) => {
    const idPostToDelete = req.params.id;
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, segredo);
    const userId = decoded.data.id;
    const { post } = await postService
    .findById(idPostToDelete);
    if (post === null) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    const { dataValues: { user: { id: userIdOfPost } } } = post;
    if (userIdOfPost !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    await postService.delete(idPostToDelete);
    res.status(204).send();
  }),
  update: rescue(async (req, res) => {
    const idPostToUpdate = req.params.id;
     const { title, content } = req.body;
    if (!validateBody(title, content, res)) return;
    const token = req.headers.authorization; const decoded = jwt.verify(token, segredo);
    const userId = decoded.data.id;
    const { post } = await postService
    .findById(idPostToUpdate);
    if (post === null) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    const { dataValues: { user: { id: userIdOfPost } } } = post;
    if (userIdOfPost !== userId) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    const postUpdated = await post.update({ title, content, post });
     postUpdated.userId = userId;
    return res.status(200).json(postUpdated);
  }),
};

module.exports = postController;
