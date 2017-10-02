const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  won: { type: Number, default: 0 },
  lost: { type: Number, default: 0 }
});


module.exports = mongoose.model('Player', playerSchema);
