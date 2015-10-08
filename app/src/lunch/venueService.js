(function(){
  'use strict';

  angular.module('lunchApp')
         .service('venueService', ['$q', VenueService]);

  function VenueService($q){

    var venues = [
      {id: 1, name: 'Subway - Silverdale Rd', location: '-37.7895482,175.3257643', address: '122 Silverdale Road, Silverdale'},
      {id: 2, name: 'Subway - Grey St', location: '-37.7757945,175.2837887', address: '372 Grey Street, Hamilton East'},
      {id: 3, name: 'Subway - Victoria St', location: '-37.7699599,175.254778', address: '159 Victoria Street, Hamilton Central'},
      {id: 4, name: 'Subway - Ulster St', location: '-37.7699599,175.254778', address: '15 Ulster Street, Whitiora'},
      {id: 5, name: 'Subway - Centre Place', location: '-37.7699599,175.254778', address: 'Ward Street, Centre Place Mall'},
      {id: 6, name: 'Subway - Greenwood', location: '-37.7699599,175.254778', address: '65 Greenwood Street, Frankton'},
      {id: 7, name: 'McDonald\'s - Grey St', location: '-37.7699599,175.254778', address: '315 Grey Street, Hamilton East'},
      {id: 8, name: 'McDonald\'s - Worley Pl', location: '-37.7699599,175.254778', address: '8 Worley Place, Hamilton Central'},
      {id: 9, name: 'McDonald\'s - Peach Grove Rd', location: '-37.7699599,175.254778', address: '321 Peach Grove Road, Claudelands'},
      {id: 10, name: 'McDonald\'s - Greenwood St', location: '-37.7699599,175.254778', address: '28-28 Greenwood Street, Frankton'},
      {id: 11, name: 'McDonald\'s - Hukanui Rd', location: '-37.7728094,175.2585545', address: '183 Hukanui Road, Chartwell'},
      {id: 12, name: 'McDonald\'s - Te Rapa', location: '-37.7728094,175.2585545', address: '2 Pukete Road, Te Rapa'},
      {id: 13, name: 'The Cook', location: '-37.7933147,175.2940284', address: '7 Cook Street, Hamilton East'},
      {id: 14, name: 'Mavis & Co', location: '-37.7910298,175.291838', address: '475 Grey Street, Hamilton East'},
      {id: 15, name: 'Mavis Made to Order', location: '-37.7878422,175.2796599', address: 'Nisbet Street, Hamilton Central'},
      {id: 16, name: 'Grey St Kitchen', location: '-37.7935769,175.2932756', address: '355 Grey Street, Hamilton East'},
      {id: 17, name: 'Hydro Cafe', location: '-37.7990835,175.2894056', address: '33 Jellicoe Drive, Hamilton East'},
      {id: 18, name: 'Two Birds Eatery', location: '-37.791264,175.294326', address: '44 Clyde Street, Hamilton East'},
      {id: 19, name: 'Homestead Bar & Eatery', location: '-37.801098,175.322156', address: '276 Cambridge Road, Hillcrest'},
      {id: 20, name: 'Chim Choo Ree', location: '-37.7925214,175.2883754', address: '14 Bridge Street, Hamilton'},
      {id: 21, name: 'Gothenburg', location: '-37.7901688,175.2867946', address: '21 Grantham Street, Hamilton Central'},
      {id: 22, name: 'Scotts Epicurean', location: '-37.7892806,175.2846436', address: '181 Victoria Street, Hamilton Central'},
      {id: 23, name: 'Jack\'s Coffee Lounge', location: '-37.7973981,175.3106073', address: '1/31 Cambridge Road, Hillcrest'},
      {id: 24, name: 'Momento', location: '-37.7904799,175.2978185', address: '109 Victoria Street, Hamilton Central'},
      {id: 25, name: 'Momento North', location: '-37.7797127,175.2757203', address: '3 Ulster Street, Whitiora'},
      {id: 26, name: 'Momento Cafe Hospital', location: '-37.7797127,175.2757203', address: '224 Pembroke Street, Waikato Hospital'},
      {id: 27, name: 'Momento on Maui', location: '-37.741168,175.2289835', address: '8C Maui Street, Te Rapa'},
      {id: 28, name: 'S\'orbi', location: '37.7766189,175.2990432', address: '180 Peachgrove Road, Claudelands'},
      {id: 29, name: 'Rocket Espresso Bar', location: '-37.7929954,175.2930605', address: '385 Grey Street, Hamilton East'},
      {id: 30, name: 'The River Kitchen', location: '-37.7885134,175.2839724', address: '237 Victoria Street, Hamilton Central'},
      {id: 31, name: 'deVice Cafe', location: '-37.7784604,175.3112546', address: '9 Melody Lane, Innovation Park'},
      {id: 32, name: 'Starbucks - CBD', location: '-37.771337,175.2861062', address: 'cnr Ward Street and Worley Place'},
      {id: 33, name: 'Starbucks - Chartwell', location: '-37.7663681,175.2706123', address: 'Westfield Shopping Centre, Chartwell'},
      {id: 34, name: 'Pita Pit - Waikato University', location: '-37.7750185,175.2968765', address: 'University of Waikato, Hillcrest'},
      {id: 35, name: 'Pita Pit - Hamilton CBD', location: '-37.7750185,175.2968765', address: '109 Ward Street, Hamilton Central'},
      {id: 36, name: 'Pita Pit - Te Awa', location: '-37.747031,175.232151', address: '1 Pacific Crescent, Te Rapa'},
      {id: 37, name: 'Hell Pizza - Hillcrest', location: '-37.7687146,175.2538273', address: '265 Clyde Street, Hamilton East'},
      {id: 38, name: 'Hell Pizza - Dinsdale', location: '-37.7687146,175.2538273', address: '18 Whatawhata Road, Dinsdale'},
      {id: 39, name: 'Hell Pizza - Beerescourt', location: '-37.7687146,175.2538273', address: '1377 Victoria Street, Beerescourt'},
      {id: 40, name: 'Hell Pizza - Rototuna', location: '-37.7769413,175.252185', address: '30 Horsham Downs Road, Rototuna'}
    ];

    // Promise-based API
    return {
      getAllVenues : function() {
        return $q.when(venues);
      },
      getLunch : function(venueId){
        return $q.when(_.find(venues, {id: venueId}));
      }
    };
  }

})();
