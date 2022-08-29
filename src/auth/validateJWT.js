// ./auth/validateJWT.js
const jwt = require('jsonwebtoken');

const { User } = require('../database/models');

const segredo = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, segredo);
    const user = await User.findOne({ where: { email: decoded.data.email } });
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Expired or invalid token' });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};