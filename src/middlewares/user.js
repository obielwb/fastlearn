const { verify } = require('jsonwebtoken');
const axios = require('axios');

const config = require('../config/auth');

module.exports = (req, res, next) => {
  const session = req.cookies.session;

  if (!session) {
    res.locals.user = null;
    return next();
  }

  verify(session, config.secret, (error, decoded) => {
    if (error) {
      res.locals.user = null;
      return next();
    }

    const config = {
      headers: {
        Authorization: `Bearer ${session}`,
      },
    };

    axios
      .get(`http://localhost:3030/users/${decoded.id}/all`, config)
      .then((response) => {
        if (response.data) {
          const { data } = response;

          res.locals.user = data;

          return next();
        } else {
          res.locals.user = null;
          return next();
        }
      })
      .catch(() => {
        res.locals.user = null;
        return next();
      });
  });
};
