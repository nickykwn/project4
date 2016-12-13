const router = require('express').Router();
const { getFighters } = require('../services/fighters');

// handles all the routes

// get all the fighters
router.get('/', getFighters, (req, res) => {
  res.json(res.fighters || []);
});

module.exports = router;
