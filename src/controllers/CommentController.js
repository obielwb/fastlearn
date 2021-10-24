const Comment = require('../models/Comment');

module.exports = {
  async index(req, res) {
    const comments = await Comment.findAll();

    return res.json(comments);
  },

  async show(req, res) {
    const { id } = req.params;

    const comment = await Comment.findOne({
      where: { id }
    });

    return res.json(comment);
  },

  async store(req, res) {
    const { post_id, content, user_id } = req.body;

    await Comment.create({
      post_id,
      content,
      user_id
    });

    return res.json(await Comment.findAll({
      where: { post_id }
    }));
  }
};