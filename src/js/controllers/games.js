angular
  .module('gameApp')
  .controller('gamesIndexCtrl', gamesIndexCtrl)
  .controller('gamesNewCtrl', gamesNewCtrl)
  .controller('gamesShowCtrl', gamesShowCtrl)
  .controller('gamesEditCtrl', gamesEditCtrl);

gamesIndexCtrl.$inject = ['game'];
function gamesIndexCtrl(game) {
  const vm = this;

  vm.all = game.query();
}

gamesNewCtrl.$inject = ['game', '$state'];
function gamesNewCtrl(game, $state) {
  const vm = this;
  vm.game = {};

  function gamesCreate() {
    if (vm.gameForm.$valid) {
      game
        .save(vm.game)
        .$promise
        .then(() => $state.go('gamesIndex'));
    }
  }

  vm.create = gamesCreate;
}

gamesShowCtrl.$inject = ['game', '$stateParams', '$state'];
function gamesShowCtrl(game, $stateParams, $state) {
  const vm = this;

  vm.game = game.get($stateParams);

  function gamesDelete() {
    vm.game
      .$remove()
      .then(() => $state.go('gamesIndex'));
  }

  vm.delete = gamesDelete;
}

gamesEditCtrl.$inject = ['game', '$stateParams', '$state'];
function gamesEditCtrl(game, $stateParams, $state) {
  const vm = this;

  vm.game = game.get($stateParams);

  function gamesUpdate() {
    if (vm.gameForm.$valid) {
      vm.game
        .$update()
        .then(() => $state.go('gamesShow', $stateParams));
    }
  }

  vm.update = gamesUpdate;
}
