const Path = require('../models/Path');

module.exports = {
  async index(req, res) {
    const paths = await Path.findAll();

    return res.json(paths);
  },

  async show(req, res) {
    const { path_id } = req.params;

    const post = await Path.findAll({
      where: { path_id }
    });

    return res.json(post);
  },

  async store(req, res) {
    const { path_id, post_id, community_id } = req.body;

    // TODO: verify how we are gonna deal with multiple post_ids - Path.update? An array?
    const path = await Path.create({ 
      path_id,
      post_id,
      community_id
    });

    return res.json(path);
  }
};