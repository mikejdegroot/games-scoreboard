angular
  .module('gameApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/static/home.html'
    })
    .state('gamesIndex', {
      url: '/games',
      templateUrl: 'js/views/games/index.html',
      controller: 'gamesIndexCtrl as gamesIndex'
    })
    .state('gamesNew', {
      url: '/games/new',
      templateUrl: 'js/views/games/new.html',
      controller: 'gamesNewCtrl as gamesNew'
    })
    .state('gamesShow', {
      url: '/games/:id',
      templateUrl: 'js/views/games/show.html',
      controller: 'gamesShowCtrl as gamesShow'
    })
    .state('gamesEdit', {
      url: '/games/:id/edit',
      templateUrl: 'js/views/games/edit.html',
      controller: 'gamesEditCtrl as gamesEdit'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/views/auth/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/views/auth/register.html',
      controller: 'RegisterCtrl as register'
    });

  $urlRouterProvider.otherwise('/games');
}
