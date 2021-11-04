const express = require('express');
const router = express.Router();

router.get('/modals/logon', async (req, res) => {
    res.render('logon');
});

module.exports = router;
