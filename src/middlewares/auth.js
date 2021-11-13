const { verify } = require('jsonwebtoken');

const config = require('../config/auth');

module.exports = (req, res, next) => {
  const authHeader  = req.headers.authorization;

  if (!authHeader)
    return res.status(401).json({ error: 'Token not provided' });

  const [, token] = token.split(' ');

  try {
    const decoded = verify(token, config.secret);

    req.id = decoded['id'];

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
