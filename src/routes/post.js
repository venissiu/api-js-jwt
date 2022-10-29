const express = require('express');
const post = require('../controllers/postController');
const validateJWT = require('../middlewares/auth/validateJWT');

const postRouter = express.Router();
postRouter.get('/post', validateJWT, post.findAll);
postRouter.get('/post/:id', validateJWT, post.findById);
postRouter.post('/post', validateJWT, post.create);
postRouter.delete('/post/:id', validateJWT, post.delete);
postRouter.put('/post/:id', validateJWT, post.update);
module.exports = postRouter;
