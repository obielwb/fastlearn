const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:name', async (req, res) => {
  const name = req.params.name;
    
  //   try {
  //     const response = await axios.get(`https://fastlearn-api.herokuapp.com/community/${name}`);
  //     res.render('community', { community: response.data });
  //   } catch (error) {
  //     res.render('community', { community: null });
  //   }

  res.render('community');
});

module.exports = router;
