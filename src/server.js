require('dotenv').config();
const express = require('express');
const app = require('./api');
const routes = require('./routes');
const validateJWT = require('./middlewares/auth/validateJWT');
const userRoutes = require('./routes/user');
const postRouter = require('./routes/post');

const apiRoutes = express.Router();
// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.use((err, req, res, _next) => res.status(500).json({ message: 'Erro no servidor! ' }));
apiRoutes.post('/login', routes.login);
apiRoutes.get('/categories', validateJWT, routes.categories.findAll);
apiRoutes.post('/categories', validateJWT, routes.categories.create);

app.use(apiRoutes);
app.use(postRouter);
app.use(userRoutes);
// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
