const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  //   try {
  //     const response = await axios.get(`https://fastlearn-api.herokuapp.com/post/id`);
  //     res.render('post', { post: response.data });
  //   } catch (error) {
  //     res.render('post', { post: null });
  //   }

  res.render('post');
});

module.exports = router;
