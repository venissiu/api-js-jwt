require('dotenv').config();
const express = require('express');
const app = require('./api');
const routes = require('./routes');
const { userMiddleware } = require('./middlewares/userValidation');

const apiRoutes = express.Router();
// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;
apiRoutes.post('/login', routes.login);
apiRoutes.post('/user', userMiddleware, routes.user.create);
app.use(apiRoutes);
// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.listen(port, () => console.log('ouvindo porta', port));
