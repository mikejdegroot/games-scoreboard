angular
  .module('gameApp')
  .factory('Player', Player);

Player.$inject = ['$resource'];
function Player($resource) {
  return new $resource('/api/players/:id', { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
