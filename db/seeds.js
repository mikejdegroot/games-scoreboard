const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Game = require('../models/game');
const Player = require('../models/player');

mongoose.connect(dbURI);

Game.collection.drop();
Player.collection.drop();

Player
  .create([{
    name: 'Mike',
    won: 0,
    lost: 0
  }, {
    name: 'Alex',
    won: 0,
    lost: 0
  }, {
    name: 'Sian',
    won: 0,
    lost: 0
  }
  ])
  .then((players) => {
    console.log(`${players.length} players created`);
    return Game
    .create([{
      playerOne: players[0],
      playerTwo: players[1],
      playerOneScore: 10,
      playerTwoScore: 15
    },{
      playerOne: players[0],
      playerTwo: players[2],
      playerOneScore: 10,
      playerTwoScore: 20
    },{
      playerOne: players[1],
      playerTwo: players[0],
      playerOneScore: 10,
      playerTwoScore: 30
    }
    ]);
  })

.then((games) => console.log(`${games.length} games created`))
.catch((err) => console.log(err))
.finally(() => mongoose.connection.close());
