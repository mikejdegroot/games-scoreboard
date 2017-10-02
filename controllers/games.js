const Game = require('../models/game');

function indexRoute(req, res, next) {
  Game
    .find()
    .exec()
    .then((games) => res.json(games))
    .catch(next);
}

function createRoute(req, res, next) {
  Game
    .create(req.body)
    .then((game) => res.status(201).json(game))
    .catch(next);
}

function showRoute(req, res, next) {
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.notFound();

      res.json(game);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.notFound();

      for(const field in req.body) {
        game[field] = req.body[field];
      }

      return game.save();
    })
    .then((game) => res.json(game))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.notFound();

      return game.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
