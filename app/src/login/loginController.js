(function(){

  angular
       .module('login')
       .controller('LoginController', [
          '$scope', 'LoginService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$auth',
          LoginController
       ]);

  function LoginController($scope,loginService, $mdSidenav, $mdBottomSheet, $log, $q, $auth) {
    var self = this;
    self.login = login;

	// $scope.authenticate = function(provider) {		
      // $auth.authenticate(provider);
    // };
    // *********************************
    // Internal methods
    // *********************************
    function login(event, provider){    
      loginService
            .attemptSignIn(provider)
            .then( function( user ) {
              $scope.$emit('userSignedIn')
            });
    };
  }

})();
