app.controller('MainCtrl', ['$scope', 'heroku_factory', function ($scope, heroku_factory) {
  

  $scope.users = heroku_factory.users;


  $scope.addUser = function(){
    var success = function(response){
      $scope.users.push(response.data.name);
      console.log($scope.users);
    }
    var fail = function(){console.log('nada')};

    heroku_factory.addUser($scope.user).then(success, fail);
  };

}]);