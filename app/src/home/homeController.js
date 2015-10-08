(function(){

  angular
       .module('home')
       .controller('HomeController', [
          '$mdSidenav', '$mdBottomSheet', '$log', '$q',
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
