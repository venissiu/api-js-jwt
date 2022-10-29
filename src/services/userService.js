const { User } = require('../database/models');
const CustomError = require('../error/CustomError');

const userService = {
  create: async (newUser) => {
    const { email, password, displayName, image } = newUser;
    const emailAlreadyExists = await User.findOne({ where: { email } });
    if (emailAlreadyExists) {
      throw new CustomError(409, 'User already registered');
    }
    const createdUser = await User.create({ displayName, email, password, image });
    return createdUser;
  },
  
  findAll: async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return { users };
  },

  findById: async (id) => {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
    return { user };
  },
  findByEmail: async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
  },
};

module.exports = userService;
