(function(){
  'use strict';

  angular.module('sign-in')
         .service('signInService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){


    // Promise-based API
    return {
      attemptSignIn : function() {
        // Simulate async nature of real remote calls
        // Do google login stuff
      }
    };
  }

})();
