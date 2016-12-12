const router = require('express').Router();
const { getFighters } = require('../services/fighters');

router.get('/', getFighters, (req, res) => {
  res.json(res.fighters || []);
})

module.exports = router;
