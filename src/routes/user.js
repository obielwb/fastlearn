const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  res.render('user');
});

module.exports = router;
