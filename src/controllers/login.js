const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../database/models');
const rescue = require('../rescue');

const SECRET = process.env.JWT_SECRET;

const validateBody = (body, res) => {
  const { email, password } = body;

  if (!email || !password) {
    res.status(400).json({ message: 'Some required fields are missing' });
    return false;
  }

  return true;
};

module.exports = rescue(async (req, res) => {
  const { email, password } = req.body;

  if (!validateBody(req.body, res)) return;

  const user = await User.findOne({ where: { email } });
  
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  const token = jwt.sign({ data: user }, SECRET, jwtConfig);
  return res.status(200).json({ token });
});
