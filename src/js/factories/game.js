angular
  .module('gameApp')
  .factory('Game', Game);

Game.$inject = ['$resource'];
function Game($resource) {
  return new $resource('/api/games/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
