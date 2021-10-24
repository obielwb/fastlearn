const Subscription = require('../models/Subscription');

module.exports = {
  async index(req, res) {
    const subscriptions = await Subscription.findAll();

    return res.json(subscriptions);
  },

  async show(req, res) {
    const { user_id } = req.params;

    const subscription = await Subscription.findAll({
      where: { user_id }
    });

    return res.json(subscription);
  },

  async store(req, res) {
    const { user_id, community_id } = req.body;

    await Subscription.create({ 
      user_id,
      community_id
    });

    return res.json(Subscription.findAll({
      where: { user_id }
    }));
  }
};