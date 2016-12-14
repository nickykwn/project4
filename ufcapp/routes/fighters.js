const router = require('express').Router();
const { getFighters, saveFighter, removeFighter } = require('../services/fighters');

// handles all the routes

// get all the fighters
router.get('/', getFighters, (req, res) => {
  res.json(res.fighters || []);
});

// router.get('/', saveFighter, (req, res) => {
//   res.json({ message: 'Fighter has been added to favorites!'});
// });

// router.delete('/:id', removeFighter, (req, res) => {
//   res.json({ message: 'deleted' })
// })

module.exports = router;
