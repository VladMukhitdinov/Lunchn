(function(){

  angular
       .module('home')
       .controller('HomeController', [
          '$state', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          HomeController
       ]);

  function HomeController($state, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    self.create = create;
    self.find = find;

    function create(){
      $state.go('create');
    }

    function find(){
      $state.go('find-lunch');
    }

  }

})();
