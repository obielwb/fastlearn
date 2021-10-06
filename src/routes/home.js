const express = require('express');
const homeRouter = express.Router();
const axios = require('axios');

homeRouter.get('', async (req, res) => {
  try {
    const response = await axios.get('https://project-tof-api.herokuapp.com/newsletter');
    res.render('home', { posts: response.data.news });
  } catch (error) {
    res.render('home', { posts: null });
  }
});

module.exports = homeRouter;
