(function(){
  'use strict';
  angular.module('login')
         .service('LoginService', ['$q', LoginService]);

  function LoginService($q){
    var user = {
      name: 'Chris',
      email: 'chriscbrock@gmail.com'
    }
    return {
      attemptSignIn : function() {
        // Simulate async nature of real remote calls
        return $q.when(user);
      }
    };
  }

})();
