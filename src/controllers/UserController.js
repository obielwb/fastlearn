const User = require('../models/User');

const { hash, genSalt, compare } = require('bcrypt');
const { v4 } = require('uuid');
const validate = require('uuid-validate');
const { sign } = require('jsonwebtoken');

const config = require('../config/auth');

module.exports = {
  async index(req, res) {
    try {
      const users = await User.findAll({
        attributes: [
          'id',
          'username',
          'email',
          'avatar',
          'standard',
          'created_at',
        ],
      });

      return res.json(users);
    } catch {
      return res.status(500).send({
        error: 'Server fail',
      });
    }
  },

  async show(req, res) {
    const { id } = req.params;

    if (!validate(id, 4))
      return res.status(400).send({
        error: 'Invalid user',
      });

    try {
      const user = await User.findOne({
        where: { id },
        attributes: ['username', 'email', 'avatar', 'created_at'],
      });

      if (!user)
        return res.status(404).send({
          error: 'User not found',
        });

      return res.json(user);
    } catch {
      return res.status(500).send({
        error: 'Server fail',
      });
    }
  },

  async auth(req, res) {
    const { email } = req.body;
    if (!email || email === '')
      return res.status(400).send({
        error: 'Invalid email',
      });

    const { password } = req.body;
    if (!password || password === '')
      return res.status(400).send({
        error: 'Invalid password',
      });

    try {
      const user = await User.findOne({
        where: { email },
        attributes: ['id', 'password'],
      });

      if (!user)
        return res.status(404).send({
          error: 'User not found',
        });

      const matches = await compare(password, user.get('password'));

      if (matches) {
        const token = sign(
          {
            id: user.get('id'),
          },
          config.secret,
          {
            expiresIn: 86400,
          }
        );

        return res.status(200).send({
          id: user.get('id'),
          token,
        });
      }

      return res.status(401).send({
        error: 'Invalid password',
      });
    } catch {
      return res.status(500).send({
        error: 'Server fail',
      });
    }
  },

  async store(req, res) {
    const { username } = req.body;
    if (!username || username === '')
      return res.status(400).send({
        error: 'Invalid username',
      });

    const { email } = req.body;
    if (!email || email === '')
      return res.status(400).send({
        error: 'Invalid email',
      });

    const { password } = req.body;
    if (!password || password === '')
      return res.status(400).send({
        error: 'Invalid password',
      });

    const exists = await User.findOne({
      where: { email },
    });

    if (exists)
      return res.status(400).send({
        error: 'User already exists',
      });

    const { avatar } = req.body;
    try {
      const user = await User.create({
        id: v4(),
        username,
        email,
        password: await hash(password, await genSalt()),
        avatar,
        standard,
      });

      const token = sign(
        {
          id: user.get('id'),
        },
        config.secret,
        {
          expiresIn: 86400,
        }
      );

      return res.status(201).json({
        id: user.get('id'),
        token,
      });
    } catch {
      return res.status(500).send({
        error: 'Server fail',
      });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { password, username, avatar } = req.body;

    if (!validate(id, 4))
      return res.status(400).send({
        error: 'Invalid bill',
      });

    if (!password && !username && !avatar)
      return res.status(400).send({
        error: 'Nothing to update',
      });

    try {
      const user = await User.findByPk(id);

      if (!user)
        return res.status(400).send({
          error: 'User not found',
        });

      user.password = await hash(password, await genSalt());
      user.username = username;
      user.avatar = avatar;

      await user.save();

      return res.status(200).send({
        message: 'User updated successfully',
      });
    } catch {
      return res.status(500).send({
        error: 'Server fail',
      });
    }
  },

  async destroy(req, res) {
    const { id } = req.params;

    if (!validate(id, 4))
      return res.status(400).send({
        error: 'Invalid user',
      });

    try {
      const user = await User.findByPk(id);

      if (!user)
        return res.status(404).send({
          error: 'User not found',
        });

      await user.destroy();

      return res.status(200).send({
        message: 'User deleted successfully',
      });
    } catch {
      return res.status(500).send({
        error: 'Server fail',
      });
    }
  },
};
