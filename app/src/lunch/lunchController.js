(function(){

  angular
       .module('lunch')
       .controller('LunchController', [
          'lunchService', '$stateParams',
          LunchController
       ]);

  function LunchController(service, $stateParams) {
    var self = this;

    self.lunch = {};

    service
          .getLunch(parseInt($stateParams.lunchId))
          .then( function( lunch ) {
            // Fake in some data
            lunch.members = ['Chris', 'Vlad', 'Nicola', 'Ray', 'Reynard'];
            lunch.chat = [
              'Chris created lunch',
              'Vlad joined!',
              'Vlad: Hi Chris, I can provide a car',
              'Chris: Awesome!',
              'Nicola joined',
              'Nicola: What time are we leaving?',
              'Vlad: About 11:45?',
              'Nicola: Sounds good',
              'Ray joined',
              'Reynard joined'
            ];
            lunch.coords = '-37.782, 175.352';

            self.lunch  = lunch;
          });
  }

})();
