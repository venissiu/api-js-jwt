require('dotenv').config();
const express = require('express');
const app = require('./api');
const routes = require('./routes');
const validateJWT = require('./auth/validateJWT');
const { userMiddleware } = require('./middlewares/userValidation');

const apiRoutes = express.Router();
// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;
apiRoutes.post('/login', routes.login);
apiRoutes.get('/user', validateJWT, routes.user.findAll);
apiRoutes.get('/user/:id', validateJWT, routes.user.findById);
apiRoutes.post('/user', userMiddleware, routes.user.create);
apiRoutes.get('/categories', validateJWT, routes.categories.findAll);
apiRoutes.post('/categories', validateJWT, routes.categories.create);
apiRoutes.get('/post', validateJWT, routes.post.findAll);
apiRoutes.get('/post/:id', validateJWT, routes.post.findById);
apiRoutes.post('/post', validateJWT, routes.post.create);
apiRoutes.delete('/post/:id', validateJWT, routes.post.delete);
apiRoutes.put('/post/:id', validateJWT, routes.post.update);
app.use(apiRoutes);
// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
