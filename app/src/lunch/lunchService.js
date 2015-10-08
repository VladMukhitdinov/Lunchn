(function(){
  'use strict';

  angular.module('lunchApp')
         .service('lunchService', ['$q', LunchService]);

  function LunchService($q){

    var lunches = [
      {id: 1, venue: 'Subway', date: '12/10/2015', creator: 'Marcus'},
      {id: 2, venue: 'McDonald\'s', date: '12/10/2015', creator: 'Ben'},
      {id: 3, venue: 'The Cook', date: '13/10/2015', creator: 'Mike'},
      {id: 4, venue: 'Mavis & Co', date: '14/10/2015', creator: 'Zoe'},
      {id: 5, venue: 'Grey St Kitchen', date: '15/10/2015', creator: 'Fred'},
      {id: 6, venue: 'Hydro Cafe', date: '20/10/2015', creator: 'Reynard'},
      {id: 7, venue: 'Two Birds Eatery', date: '19/10/2015', creator: 'Jenny'},
      {id: 8, venue: 'Homestead', date: '21/10/2015', creator: 'Alan'},
      {id: 9, venue: 'Chim Choo Ree', date: '23/10/2015', creator: 'Ray'},
      {id: 10, venue: 'Gothenburg', date: '23/10/2015', creator: 'Nic'},
      {id: 11, venue: 'Scotts Epicurean', date: '16/10/2015', creator: 'Vladamir'},
      {id: 12, venue: 'Jack\'s', date: '16/10/2015', creator: 'Somitha'},
      {id: 13, venue: 'Momento', date: '27/10/2015', creator: 'Shannon'},
      {id: 14, venue: 'S\'orbi', date: '13/10/2015', creator: 'Chris'},
      {id: 15, venue: 'Rocket Espresso', date: '28/10/2015', creator: 'Andrew'},
      {id: 16, venue: 'The River Kitchen', date: '28/10/2015', creator: 'Emily'},
      {id: 17, venue: 'deVice Cafe', date: '16/10/2015', creator: 'Tony'},
      {id: 18, venue: 'Starbucks', date: '15/10/2015', creator: 'Tim'},
      {id: 19, venue: 'Pita Pit', date: '14/10/2015', creator: 'Travis'},
      {id: 20, venue: 'Hell Pizza', date: '12/10/2015', creator: 'Stacey'}
    ];

    // Promise-based API
    return {
      getRecentLunches : function() {
        return $q.when(lunches);
      },
      getLunch : function(lunchId){
        return $q.when(lunches);
      }
    };
  }

})();
