(function(){

  angular
       .module('home')
       .controller('HomeController', [
          '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          HomeController
       ]);

  function HomeController($scope, loginService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;
    self.create = create;
    self.find = find;

    function create(){
      alert('create');
    }

    function find(){
      alert('find');
    }

  }

})();
