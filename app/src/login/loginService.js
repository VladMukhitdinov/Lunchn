(function(){
  'use strict';

  angular.module('login')
         .service('loginService', ['$q', LoginService]);

  function LoginService($q){


    // Promise-based API
    return {
      attemptSignIn : function() {
        // Simulate async nature of real remote calls
        // Do google login stuff
      }
    };
  }

})();
