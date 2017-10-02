const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  playerOne: { type: String, required: true },
  playerTwo: { type: String, required: true },
  playerOneScore: { type: Number, required: true },
  playerTwoScore: { type: Number, required: true }
});

module.exports = mongoose.model('Game', gameSchema);
