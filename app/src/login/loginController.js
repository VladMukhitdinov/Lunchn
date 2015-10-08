(function(){

  angular
       .module('login')
       .controller('LoginController', [
          'LoginService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          LoginController
       ]);

  function LoginController( loginService, $mdSidenav, $mdBottomSheet, $log, $q) {
    debugger;
    var self = this;
    self.signIn = signIn;

    // *********************************
    // Internal methods
    // *********************************
    function signIn(){
      signInService
            .attemptSignIn()
            .then( function( result ) {

            });
    };
  }

})();
