const router = require('express').Router();
const { getFighters, removeFighter } = require('../services/fighters');
const { saveFighters } = require('../models/fighters.js');

// handles all the routes

// get all the fighters
router.get('/', getFighters, (req, res) => {
  res.json(res.fighters || []);
});

router.post('/', (req, res) => {
  res.json({ message: 'Fighter has been added to favorites!'});
});

// router.delete('/:id', removeFighter, (req, res) => {
//   res.json({ message: 'deleted' })
// })

module.exports = router;
