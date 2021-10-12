const express = require('express');
const router = express.Router();
const axios = require('axios');

// Using Newscatcher API for DEMO purposes - https://newscatcherapi.com/
router.get('', async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {
      q: 'nasa',
      lang: 'en',
      sort_by: 'relevancy',
      page: '1'
    },
    headers: {
      'x-api-key': process.env.NEWSCATCHER_API_KEY
    }
  }

  let user = null;
  let posts = null;

  try {
    const response = (await axios.request(options)).data;

    if (response.status == "ok")
      posts = response.articles;
    
    else
      posts = null;
  } catch (error) {}

  // try {
  //   const response = (await axios.get(`https://fastlearn-api.herokuapp.com/home/user/${user.name}`)).data;

  //   if (response.status == "ok")
  //     posts = response;
  // } catch (error) {}

  res.render('home', { user, posts });
});

module.exports = router;
