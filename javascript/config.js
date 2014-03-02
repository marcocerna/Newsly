angular.module('myApp')
// We get $routeProvider cause we injected 'ngRoute' at the top
.config(function($routeProvider) {
  $routeProvider
    .when('/:subreddit', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })

    .otherwise({
      redirectTo: '/angularjs'
    })
})
