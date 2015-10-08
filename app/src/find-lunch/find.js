(function(){
  'use strict';
  angular.module('find', ['ngMaterial'])
  .config(function($stateProvider){
    $stateProvider.state('find', {
      url: '/find-lunch',
      templateUrl: './src/find-lunch/view/find.html'
    })
  });

})();
