(function(){

  angular
       .module('lunch')
       .controller('lunchController', [
          '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          LunchController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function LunchController( $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

  }

})();
