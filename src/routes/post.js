const express = require('express');
const post = require('../controllers/postController');
const validateJWT = require('../middlewares/auth/validateJWT');

const postRouter = express.Router();
postRouter.get('/', validateJWT, post.findAll);
postRouter.get('/:id', validateJWT, post.findById);
postRouter.post('/', validateJWT, post.create);
postRouter.delete('/:id', validateJWT, post.delete);
postRouter.put('/:id', validateJWT, post.update);
module.exports = postRouter;
