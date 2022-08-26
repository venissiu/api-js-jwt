const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const userService = require('../services/userService');

const userController = {
    create: async (req, res) => {
        const user = await userService.create(req.body);
        if (user.code) { return res.status(user.code).json({ message: user.error }); }
    const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  console.log(token);
        res.status(201).json({ token });
      },
      findAll: async (req, res) => {
        const { users } = await userService.findAll();
        res.status(200).json(users);
      },
};

module.exports = userController;