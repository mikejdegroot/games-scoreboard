angular
  .module('gameApp')
  .factory('game', game);

game.$inject = ['$resource'];
function game($resource) {
  return new $resource('/api/games/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
