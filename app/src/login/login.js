(function(){
  'use strict';
  angular.module('login', ['ngMaterial'])
  .config(function($stateProvider){
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: './src/login/view/login.html',
      controller: 'LoginController'
    })
  });

})();
