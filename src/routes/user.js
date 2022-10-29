const express = require('express');
const user = require('../controllers/userController');
const validateJWT = require('../middlewares/auth/validateJWT');
const { userMiddleware } = require('../middlewares/userValidation');

const userRoutes = express.Router();

userRoutes.post('/user', userMiddleware, user.create);
userRoutes.get('/user', validateJWT, user.findAll);
userRoutes.get('/user/:id', validateJWT, user.findById);
module.exports = userRoutes;
