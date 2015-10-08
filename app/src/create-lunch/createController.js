(function(){

  angular
       .module('create')
       .controller('CreateController', [
          'createService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          CreateController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function CreateController( signInService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
  }

})();
