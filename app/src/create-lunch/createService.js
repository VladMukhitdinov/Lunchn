(function(){
  'use strict';

  angular.module('create')
         .service('createService', ['$q', CreateService]);

  function CreateService($q){


    // Promise-based API
    return {
      attemptSignIn : function() {
        // Simulate async nature of real remote calls
        // Do google login stuff
      }
    };
  }

})();
