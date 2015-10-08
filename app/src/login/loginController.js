(function(){

  angular
       .module('login')
       .controller('LoginController', [
          'loginService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          LoginController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LoginController( loginService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    self.signIn   = signIn;

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
