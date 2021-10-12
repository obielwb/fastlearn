const express = require('express');
const router = express.Router();
const axios = require('axios').default;

// Using Newscatcher API for DEMO purposes - https://newscatcherapi.com/
router.get('/:name', async (req, res) => {
  const name = req.params.name;

  const options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {
      q: name,
      lang: 'en',
      sort_by: 'relevancy',
      page: '1'
    },
    headers: {
      'x-api-key': process.env.NEWSCATCHER_API_KEY
    }
  }

  let community = null;
  let posts = null;

  try {
    const response = (await axios.request(options)).data;

    if (response.status == "ok")
      posts = response.articles;
    
    else
      posts = null;
  } catch (error) {}

  // try {
  //   const response = (await axios.get(`https://fastlearn-api.herokuapp.com/community/${name}`)).data;
  //   community = response;
  // } catch (error) {}

  res.render('community', { community, posts });
});

module.exports = router;
