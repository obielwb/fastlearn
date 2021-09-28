const express = require('express');
const homeRouter = express.Router();

homeRouter.get('/', async (req, res) => {
  res.render('home');
});

module.exports = homeRouter;