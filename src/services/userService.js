const { User } = require('../database/models');

const userService = {
  create: async (newUser) => {
    const { email, password, displayName, image } = newUser;
    const emailAlreadyExists = await User.findOne({ where: { email } });
    if (emailAlreadyExists) {
      return { code: 409, error: 'User already registered' };
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
};

module.exports = userService;
