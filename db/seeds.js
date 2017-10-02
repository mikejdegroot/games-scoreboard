const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const game = require('../models/game');

mongoose.connect(dbURI);

game.collection.drop();

const gameData = [{
}];

game
  .create(gameData)
  .then(games => console.log(`${games.length} games created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
