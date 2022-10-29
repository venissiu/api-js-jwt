const jwt = require('jsonwebtoken');
const rescue = require('../helpers/rescue');

const secret = process.env.JWT_SECRET;
const userService = require('../services/userService');

const userController = {
  findById: rescue(async (req, res) => {
    const { user } = await userService.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    res.status(200).json(user);
  }),
  findAll: rescue(async (req, res) => {
    const { users } = await userService.findAll();
    res.status(200).json(users);
  }),
  create: rescue(async (req, res) => {
    const { email, password, displayName, image } = req.body;
    const user = await userService.create({ email, password, displayName, image });
    const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    res.status(201).json({ token });
  }),
};

module.exports = userController;
