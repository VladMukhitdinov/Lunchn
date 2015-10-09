(function(){

  angular
       .module('lunch')
       .controller('LunchController', [
          'lunchService', 'venueService', '$stateParams',
          LunchController
       ]);

  function LunchController(service, venueService, $stateParams) {
    var self = this;

    self.lunch = {};

    service
          .getLunch(parseInt($stateParams.lunchId))
          .then( function( lunch ) {
            venueService
              .getVenue(lunch.venueid)
              .then(function(venue){
                lunch.venue = venue;
              });

            // Fake in some data
            lunch.chat = [
              { message: 'Chris created lunch', user: null},
              { message: 'Vlad joined!', user: null},
              { message: 'Hi Chris, I can provide a car', user: 'Vlad'},
              { message: 'Awesome!', user: 'Chris'},
              { message: 'Nicola joined', user: null},
              { message: 'What time are we leaving?', user: 'Nicola'},
              { message: 'About 11:45?', user: 'Vlad'},
              { message: 'Sounds good', user: 'Nicola'},
              { message: 'Ray joined', user: null},
              { message: 'Reynard joined', user: null}
            ];
            lunch.coords = '-37.782, 175.352';

            self.lunch  = lunch;
          });
  }

})();
