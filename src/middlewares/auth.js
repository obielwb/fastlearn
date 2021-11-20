const { verify } = require('jsonwebtoken');

const config = require('../config/auth');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: 'Token not provided' });

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, config.secret);

    req.id = decoded['id'];
    return next();
  } catch {
    return res.status(401).send({ error: 'Invalid token' });
  }
};
