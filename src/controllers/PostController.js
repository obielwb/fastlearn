const Post = require('../models/Post');

module.exports = {
  async index(req, res) {
    const posts = await Post.findAll();

    return res.json(posts);
  },

  async show(req, res) {
    const { id } = req.params;

    const post = await Post.findOne({
      where: { id }
    });

    return res.json(post);
  },

  async store(req, res) {
    const { title, content, image, user_id } = req.body;

    const post = await Post.create({ 
      title,
      content,
      image,
      votes: 0,
      user_id
    });

    return res.json(post);
  }
};