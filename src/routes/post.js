const express = require('express');
const postRouter = express.Router();
const axios = require('axios');

postRouter.get('/:id', async (req, res) => {
  const id = req.params.id;

  res.render('post');
});

module.exports = postRouter;
