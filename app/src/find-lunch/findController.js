(function(){

  angular
       .module('find')
       .controller('FindController', [
          'findService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          FindController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function FindController( findService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
  }

})();
