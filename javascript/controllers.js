angular.module('myApp')
// When we add $routeParams, we no longer need the wrapper function for getArticles
.controller('HomeCtrl', function ($scope, $routeParams, Reddit) {
  $scope.user = {name: 'Marco'};
  var subreddit = $routeParams.subreddit;

  // $scope.getArticles = function(subreddit) {
    Reddit.getArticles(subreddit)
    .then(function(articles) {
      $scope.articles = articles;
    });
  // };

  // $scope.getArticles();
});