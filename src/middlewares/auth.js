const { verify } = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token)
    return res.status(401).json({ message: 'Missing auth token' });

  const [, token] = token.split(' ');

  try {
    const decoded = verify(token, process.env.TOKEN);

    req.id = decoded['id'];

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};