(function(){

  angular
       .module('home')
       .controller('HomeController', [
          'lunchService', 'venueService', '$scope', '$state', '$mdDialog', '$mdBottomSheet', '$log', '$q',
          HomeController
       ]);

  function HomeController(lunchService, venueService, $scope, $state, $mdDialog, $mdBottomSheet, $log, $q) {
    var self = this;

    self.lunches = [];
    self.getVenueColour = getVenueColour;
    self.goToLunch = goToLunch;
    self.createLunch = createLunch;

    $scope.$on('refreshLunches', load);

    function createLunch($event){
      $mdDialog.show({
          targetEvent: $event,
          templateUrl: './src/create-lunch/view/create.html',
          controller: 'CreateController'
        });
    }

    function getVenueColour(venueName){
      var hash = 0;
      for (var i = 0; i < venueName.length; i++) {
         hash = venueName.charCodeAt(i) + ((hash << 5) - hash);
      }
      var c = (hash & 0x00FFFFFF)
          .toString(16)
          .toUpperCase();

      return "00000".substring(0, 6 - c.length) + c;
    }

    function goToLunch(lunchId){
      $state.go('lunch', {lunchId: lunchId});
    }

    function load(){
    lunchService
          .getRecentLunches()
          .then( function( lunches ) {
            self.lunches  = [].concat(lunches);
            venueService
              .getAllVenues()
              .then(function(venues){
                _.each(self.lunches, function(lunch){
                  var venue = _.find(venues, {id: lunch.venueid});
                  lunch.venue = venue;
                })

              })
          });
    }
    load();
  }

})();
