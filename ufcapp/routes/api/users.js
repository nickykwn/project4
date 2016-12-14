const express         = require('express');
const Router          = express.Router();
const { createUser }  = require('../../models/users');

// handle all the routes

router.post('/', createUser, (req, res) => {
  console.log('user add route working');
  res.state(200).end();
});

module.exports = router;
