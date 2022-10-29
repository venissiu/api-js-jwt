require('dotenv').config();
const express = require('express');
const app = require('./api');
const userRoutes = require('./routes/user');
const postRouter = require('./routes/post');
const errorMiddleware = require('./middlewares/error');
const categoriesRouter = require('./routes/categories');
const loginRoutes = require('./routes/login');

const apiRoutes = express.Router();
// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

app.use(apiRoutes);
app.use('/login', loginRoutes);
app.use('/post', postRouter);
app.use('/user', userRoutes);
app.use('/categories', categoriesRouter);
app.use(errorMiddleware);
// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
