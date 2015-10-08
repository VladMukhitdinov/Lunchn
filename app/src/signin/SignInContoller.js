angular.module('SignInApp')
  .controller('LoginCtrl', function($scope, $auth) {

    $scope.authenticate = function(provider) {
		debugger;
      $auth.authenticate(provider);
    };

  });