angular
  .module('gameApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope' ];
function MainCtrl($rootScope) {
  const vm = this;

  $rootScope.$on('error', (e, err) => {
    // console.log(e, err);
    vm.message = err.data.message;

  });

  $rootScope.$on('$stateChangeSuccess', (e, state) => {
    vm.pageName = state.name;
    console.log(vm.stateHasChanged);
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    console.log(vm.stateHasChanged);
  });
}
