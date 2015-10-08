(function(){
  'use strict';
  angular.module('login', ['ngMaterial', 'satellizer'])
  .config(function($stateProvider, $authProvider){
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: './src/login/view/login.html',
      controller: 'LoginController'
    });
	
	$authProvider.google({
      clientId: '986912621824-lt2r53hd6j04bdfvlos9uv1mrdm8644a.apps.googleusercontent.com'
    });
	
	$authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
    });
  });

})();
