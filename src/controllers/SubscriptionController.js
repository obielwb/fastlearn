const Subscription = require('../models/Subscription');

module.exports = {
  async index(req, res) {
    const subscriptions = await Subscription.findAll();

    return res.json(subscriptions);
  },

  async show(req, res) {
    const { id } = req.params;

    const subscription = await Subscription.findOne({
      where: { id }
    });

    return res.json(subscription);
  },

  async store(req, res) {
    const { user_id, community_id } = req.body;

    const subscription = await Subscription.create({ 
      user_id,
      community_id
    });

    return res.json(subscription);
  }
};