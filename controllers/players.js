const Player = require('../models/player');

function indexRoute(req, res, next) {
  Player
    .find()
    .exec()
    .then((games) => res.json(games))
    .catch(next);
}

function createRoute(req, res, next) {
  Player
    .create(req.body)
    .then((game) => res.status(201).json(game))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute
};
