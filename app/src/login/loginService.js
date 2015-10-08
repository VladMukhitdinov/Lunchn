(function(){
  'use strict';
  angular.module('login')
         .service('LoginService', ['$q', '$auth', LoginService]);

  function LoginService($q, $auth){
    var user = {
      name: 'Chris',
      email: 'chriscbrock@gmail.com'
    }
    return {
      attemptSignIn : function(provider) {
        // Simulate async nature of real remote calls
		$auth.authenticate(provider) 
		.then(function(response) {
			alert('Signed in with Google+');
		})
		.catch(function(response) {
			alert('Error ocurred' + response);
		})
		
        return $q.when(user);
      }
    };
  }

})();
