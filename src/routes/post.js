const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  let user = {};
  let post = {};
  let posts = [];

  try {
    const { data, status } = await axios.get(
      'https://api.newscatcherapi.com/v2/search',
      {
        params: {
          q: id,
        },
        headers: {
          'x-api-key': `'${process.env.NEWSCATCHER_API_KEY}'`,
        },
      }
    );

    if (status == 200) {
      post = {
        author: data.articles[0].author,
        comments: parseInt(data.articles[0]._score),
        community: data.articles[0].topic,
        content: data.articles[0].summary,
        date: data.articles[0].published_date,
        id: data.articles[0]._id,
        image: data.articles[0].media,
        title: data.articles[0].title,
        votes: parseInt(data.articles[0].rank),
      };

      posts.push(post);
    } else post = null;
  } catch (error) {
    console.log(error);
  }

  //   try {
  //     const response = await axios.get(`https://fastlearn-api.herokuapp.com/post/id`);
  //     res.render('post', { post: response.data });
  //   } catch (error) {
  //     res.render('post', { post: null });
  //   }

  res.locals.post = post;

  res.render('post', { user, posts, communities: [] });
});

module.exports = router;
