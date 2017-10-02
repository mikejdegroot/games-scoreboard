angular
.module('gameApp')
.controller('gamesIndexCtrl', gamesIndexCtrl);


gamesIndexCtrl.$inject = ['Game', 'Player', '$state'];
function gamesIndexCtrl(Game, Player, $state) {
  const vm = this;
  vm.game = {};
  vm.games = Game.query();

  function gamesCreate() {
    console.log(vm.game);
    Game
    .save(vm.game)
    .$promise
    .then(() => $state.go('gamesIndex'));

  }
  vm.create = gamesCreate;


  function gamesDelete() {
    vm.game
    .$remove()
    .then(() => $state.go('gamesIndex'));
  }

  vm.delete = gamesDelete;
  vm.players = Player.query();
  vm.player = {};

  function playersCreate() {
    Player
    .save(vm.player)
    .$promise
    .then(() => $state.go('gamesIndex'));

  }
  vm.playercreate = playersCreate;

}
