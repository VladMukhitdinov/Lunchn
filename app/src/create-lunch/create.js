(function(){
  'use strict';
  angular.module('create', ['ngMaterial'])
  .config(function($mdThemingProvider, $stateProvider){

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow');

    $stateProvider.state('create', {
      url: '/create-lunch',
      templateUrl: './src/create-lunch/view/create.html'
    })
  });

})();
