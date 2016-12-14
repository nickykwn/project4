const router = require('express').Router();
const { saveFighters, getFavorites, removeFighter} = require('../models/fighters');

// handles all the routes

// get all the fighters
router.get('/:username', getFavorites, (req, res) => {
  res.json(res.fighters || []);
});

router.post('/', saveFighters, (req, res) => {
  res.json({ message: 'Fighter has been added to favorites!'});
});

router.delete('/:id', removeFighter, (req, res) => {
  res.json({ message: 'deleted' })
})

module.exports = router;
