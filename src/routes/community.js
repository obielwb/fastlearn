const express = require('express');
const router = express.Router();
const axios = require('axios').default;

// Using Newscatcher API for DEMO purposes - https://newscatcherapi.com/
const options = {
  method: 'GET',
  url: 'https://api.newscatcherapi.com/v2/search',
  params: {
    q: 'Culinary',
    lang: 'en',
    sort_by: 'relevancy',
    page: '1'
  },
  headers: {
    'x-api-key': process.env.NEWSCATCHER_API_KEY
  }
}

router.get('/:name', async (req, res) => {
  const name = req.params.name;

  axios.request(options).then((response) => {
    // console.log(response.data);
    res.render('community', { community: response.data });
  }).catch((error) => {
    console.log(error);
  }) 

  //   try {
  //     const response = await axios.get(`https://fastlearn-api.herokuapp.com/community/${name}`);
  //     res.render('community', { community: response.data });
  //   } catch (error) {
  //     res.render('community', { community: null });
  //   }
  
  res.render('community');
});

module.exports = router;
