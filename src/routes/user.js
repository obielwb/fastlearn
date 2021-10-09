const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  //   try {
  //     const response = await axios.get(`https://fastlearn-api.herokuapp.com/user/${id}`);
  //     res.render('user', { user: response.data });
  //   } catch (error) {
  //     res.render('user', { user: null });
  //   }

  res.render('user');
});

module.exports = router;
