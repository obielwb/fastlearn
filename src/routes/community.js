const express = require('express');
const communityRouter = express.Router();

communityRouter.get('', async (req, res) => {
    res.render('community');
});

module.exports = communityRouter;
