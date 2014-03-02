angular.module('myApp')
.service('Reddit', function($http) {


  this.getArticles = function(subreddit) {
    subreddit = subreddit || 'angularjs';

    return $http({
      method: 'JSONP', // Why not GET request? Reason is in Evernote notes
      url: 'http://www.reddit.com/r/' + subreddit + '.json',
      params: {
        'jsonp': 'JSON_CALLBACK'
      }
    }).then(function(resp) {
      return resp.data.data.children;
    });

  };

})
