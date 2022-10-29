const express = require('express');
const user = require('../controllers/userController');
const validateJWT = require('../middlewares/auth/validateJWT');
const { userMiddleware } = require('../middlewares/userValidation');

const userRoutes = express.Router();

userRoutes.post('/', userMiddleware, user.create);
userRoutes.get('/', validateJWT, user.findAll);
userRoutes.get('/:id', validateJWT, user.findById);
module.exports = userRoutes;
