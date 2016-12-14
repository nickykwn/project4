const db = require('../db/db.js');

function getFavorites(req, res, next) {
  db.any('SELECT * FROM fav_fighters WHERE username = $1;', [req.params.username])
  .then((fighters) => {
    res.fighters = fighters;
    next();
  })
  .catch(error => next(error));
}

function saveFighters(req, res, next) {
  console.log('inside saveFighters')
  db.none(`INSERT INTO fav_fighters (id, wins, losses, draws, last_name, first_name,
  weight_class, fighter_status, fighter_img, username)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);`,
  [req.body.int, req.body.int2, req.body.int3, req.body.int4, req.body.text,
  req.body.text2, req.body.text3, req.body.text4, req.body.url, req.body.username])
  .then(next())
  .catch(err => next(err));
}

function removeFighter(req, res, next) {
  db.none(`DELETE FROM fav_fighters WHERE username = $1;`, [req.params.username])
  .then((fighters) => {
    res.fighters = fighters;
    next();
  })
  .catch(error => next(error));
}

module.exports = {
  saveFighters,
  getFavorites,
  removeFighter
};
