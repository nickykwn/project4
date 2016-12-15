const router = require('express').Router();
const { saveFighters, getFavorites, removeFighter} = require('../models/fighters');
const { getFighters } = require('../services/fighters');
// handles all the routes

// get all the fighters
router.get('/', getFighters, (req, res) => {
  res.json(res.fighters);
});

router.post('/', saveFighters, (req, res) => {
  res.json({ message: 'Fighter has been added to favorites!'});
});

// delete route to remove fighter
router.delete('/:id', removeFighter, (req, res) => {
  res.json({ message: 'deleted' })
});

module.exports = router;
