angular
.module('gameApp')
.controller('gamesIndexCtrl', gamesIndexCtrl);


gamesIndexCtrl.$inject = ['game', '$state'];
function gamesIndexCtrl(game, $state) {
  const vm = this;
  vm.game = {};
  vm.all = game.query();

  function gamesCreate() {
    game
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
}
