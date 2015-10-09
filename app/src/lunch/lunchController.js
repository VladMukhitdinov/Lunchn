(function(){

  angular
       .module('lunch')
       .controller('LunchController', [
          'lunchService', 'venueService', '$stateParams', '$mdToast',
          LunchController
       ]);

  function LunchController(service, venueService, $stateParams, toast) {
    var self = this;

    self.lunch = {};
    self.joinLunch = joinLunch;

    function joinLunch(){
      self.lunch.chat.push({ message: 'Ray joined', user: null});
      toast.show(
            toast.simple()
              .content('Enjoy your lunch!')
              .position('top left')
              .hideDelay(3000)
          );
    }

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

              { message: 'Reynard joined', user: null}
            ];
            lunch.coords = '-37.782, 175.352';

            self.lunch  = lunch;
          });
  }

})();
