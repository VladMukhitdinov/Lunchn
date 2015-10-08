(function(){
  'use strict';
  angular.module('create', ['ngMaterial'])
  .config(function($stateProvider){
    $stateProvider.state('create', {
      url: '/create-lunch',
      templateUrl: './src/create-lunch/view/create.html'
    })
  });

})();
