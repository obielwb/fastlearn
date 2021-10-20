const User = require('../models/User');
const { hash, compare } = require('bcrypt');

module.exports = {
  async index(req, res) {
    const users = await User.findAll({
      attributes: [ 
        'id',
        'email',
        'username',
        'avatar',
      ],
    });

    return res.json(users);
  },

  async get(req, res) {
    const { username } = req.params;

    const user = await User.findOne({
      where: { username },
      attributes: [
        'id',
        'email',
        'username',
        'avatar',
      ],
    });

    return res.json(user);
  },

  async store(req, res) {
    const { email, password, username, avatar } = req.body;

    const hashedPassword = await hash(password, 8);

    const user = await User.create({ 
      email,
      password: hashedPassword,
      username,
      avatar
    });

    return res.json(user);
  },
};