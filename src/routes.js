const login = require('./controllers/login');
const user = require('./controllers/userController');
const categories = require('./controllers/categoryController');
const post = require('./controllers/postController');

module.exports = {
  login,
  user,
  categories,
  post,
};
