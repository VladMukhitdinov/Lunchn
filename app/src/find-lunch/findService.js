(function(){
  'use strict';

  angular.module('find')
         .service('findService', ['$q', FindService]);

  function FindService($q){


    // Promise-based API
    return {
      attemptSignIn : function() {
        // Simulate async nature of real remote calls
        // Do google login stuff
      }
    };
  }

})();
