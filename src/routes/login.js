const express = require('express');
const login = require('../controllers/login');

const loginRoutes = express.Router();

loginRoutes.post('/', login);
module.exports = loginRoutes;
