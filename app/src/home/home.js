(function(){
  'use strict';
  angular.module('home', ['ngMaterial'])
  .config(function($stateProvider){
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: './src/home/view/home.html'
    })
  });

})();
