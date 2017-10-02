const router = require('express').Router();
const games = require('../controllers/games');

router.route('/games')
  .get(games.index)
  .post(games.create);

router.route('/games/:id')
  .get(games.show)
  .put(games.update)
  .delete(games.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
