(function(){
  'use strict';
  angular.module('login')
         .service('LoginService', ['$q', LoginService]);

  function LoginService($q){
debugger;

    // Promise-based API
    return {
      attemptSignIn : function() {
        // Simulate async nature of real remote calls
        // Do google login stuff
      }
    };
  }

})();
