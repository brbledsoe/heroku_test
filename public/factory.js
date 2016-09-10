app.factory('heroku_factory', ['$http', function($http){
  var auth = {};

  auth.users = [];

  auth.addUser = function(user){
    return $http.post('/addUser', user);
  };
    
  return auth;
}]);