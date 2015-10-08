(function(){
  'use strict';
  angular.module('lunch', ['ngMaterial'])
  .config(function($stateProvider){
    $stateProvider.state('lunch', {
      url: '/lunch/{lunchId}',
      templateUrl: './src/lunch/view/lunch.html'
    })
  });

})();
