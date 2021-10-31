const Community = require('../models/Community');

module.exports = {
    async index(req, res) {
        const communities = Community.findAll();

        return res.json(communities);
    },

    async show(req, res) {
        const { id } = req.params;

        const community = await Community.findOne({
            where: { id }
        });

        return res.json(community);
    },

    async store(req, res) {
        const { name, description, icon, banner } = req.body;

        const community = await Community.create({
            name,
            description,
            icon,
            banner
        });

        return res.json(community);
    }
};