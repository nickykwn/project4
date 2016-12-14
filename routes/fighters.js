const router = require('express').Router();
const { getFighters } = require('../services/fighters');
const { saveFighters, removeFighter} = require('../models/fighter.js');

// handles all the routes

// get all the fighters
router.get('/', getFighters, (req, res) => {
  res.json(res.fighters || []);
});

router.post('/', saveFighters, (req, res) => {
  res.json({ message: 'Fighter has been added to favorites!'});
});

router.delete('/:id', removeFighter, (req, res) => {
  res.json({ message: 'deleted' })
})

module.exports = router;
