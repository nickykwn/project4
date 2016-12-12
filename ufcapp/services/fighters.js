const fetch = require('node-fetch');

function getFighters(req, res, next) => {
  fetch(`http://ufc-data-api.ufc.com/api/v1/us/fighters`);
  .then(r => r.json())
  .then((result) => {
    res.fighter = result;
    console.log('The fighters are:', result);
    next();
  })
  .catch((err) => {
    res.err = err;
    next();
  });
}

module.exports = { getFighters };
