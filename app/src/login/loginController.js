(function(){

  angular
       .module('login')
       .controller('LoginController', [
          '$scope','LoginService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          LoginController
       ]);

  function LoginController($scope, loginService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    self.login = login;

    // *********************************
    // Internal methods
    // *********************************
    function login(){    
      loginService
            .attemptSignIn()
            .then( function( user ) {
              $scope.$emit('userSignedIn')
            });
    };
  }

})();
