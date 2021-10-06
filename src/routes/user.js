const express = require('express');
const userRouter = express.Router();
const axios = require('axios');

userRouter.get('/:id', async (req, res) => {
  const id = req.params.id;

  res.render('user');
});

module.exports = userRouter;
