(function(){
  'use strict';

  angular.module('login', ['ngMaterial'])
  .config(function($stateProvider){
    $stateProvider.state({
      url: 'login',
      templateUrl: './src/login/view/login.html'
    })
  });

})();
