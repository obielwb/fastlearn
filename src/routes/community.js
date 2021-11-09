const express = require('express');
const router = express.Router();
const axios = require('axios').default;

// Using Newscatcher API for DEMO purposes - https://newscatcherapi.com/
router.get('/:name', async (req, res) => {
  const name = req.params.name;

  let user = {};
  let posts = [];
  let communities = [];

  try {
    const { data, status } = await axios.get('https://api.newscatcherapi.com/v2/search', {
      params: {
        q: 'unicamp',
        lang: 'en',
        sort_by: 'relevancy',
        page: '1'
      },
      headers: {
        'x-api-key': `'${process.env.NEWSCATCHER_API_KEY}'`
      },
    });

    if (status == 200) {
      data.articles.forEach(article => {
        const post = {
          author: article.author,
          comments: parseInt(article._score),
          community: article.topic,
          content: article.summary,
          date: article.published_date,
          id: article._id,
          image: article.media,
          title: article.title,
          votes: parseInt(article.rank),
        };

        const community = {
          id: article._id,
          name: article.topic,
        };

        posts.push(post);
        communities.push(community);
      });
    }

    else
      posts = null;
  } catch (error) {
    console.log(error);
  }

  // try {
  //   const response = (await axios.get(`https://fastlearn-api.herokuapp.com/community/${name}`)).data;
  //   community = response;
  // } catch (error) {}

  res.render('community', { user, posts, communities });
});

module.exports = router;
