(function(){
  'use strict';

  angular.module('lunchApp')
         .service('lunchService', ['$q', LunchService]);

  function LunchService($q){

    var lunches = [
      {id: 1, venueid: 3, date: "2015/10/12", maxpeople: 3, creator: "Marcus", people: ["Marcus", "Darren"]},
      {id: 2, venueid: 7, date: "2015/10/12", maxpeople: 2, creator: "Ben", people: ["Ben"]},
      {id: 3, venueid: 13, date: "2015/10/13", maxpeople: 4, creator: "Mike", people: ["Chris", "Ray", "Vladamir", "Mike"]},
      {id: 4, venueid: 14, date: "2015/10/14", maxpeople: 5, creator: "Zoe", people: ["Zoe", "Fred", "Shane", "Mike"]},
      {id: 5, venueid: 16, date: "2015/10/15", maxpeople: 3, creator: "Fred", people: ["Fred", "Kerry"]},
      {id: 6, venueid: 17, date: "2015/10/20", maxpeople: 4, creator: "Reynard", people: ["Reynard", "Rachelle", "Tracey", "Jemma"]},
       {id: 7, venueid: 18, date: "2015/10/19", maxpeople: 2, creator: "Jenny", people: ["Jenny"]},
       {id: 8, venueid: 19, date: "2015/10/21", maxpeople: 4, creator: "Alan", people: ["Alan", "Natasha", "Angela", "Chris"]},
       {id: 9, venueid: 20, date: "2015/10/23", maxpeople: 3, creator: "Ray", people: ["Ray", "Vladamir"]},
       {id: 10, venueid: 21, date: "2015/10/23", maxpeople: 5, creator: "Nic", people: ["Angela", "Rachelle", "Marie", "Louise", "Nic"]},
       {id: 11, venueid: 22, date: "2015/10/16", maxpeople: 2, creator: "Vladamir", people: ["Vladamir", "J\'nan"]},
       {id: 12, venueid: 23, date: "2015/10/16", maxpeople: 7, creator: "Somitha", people: ["Somitha", "J'nan", "Wendy"]},
       {id: 13, venueid: 9, date: "2015/10/27", maxpeople: 4, creator: "Shannon", people: ["Alan", "Jenny", "Shannon"]},
       {id: 14, venueid: 28, date: "2015/10/13", maxpeople: 4, creator: "Chris", people: ["Shannon", "Phil", "Chris"]},
       {id: 15, venueid: 29, date: "2015/10/28", maxpeople: 3, creator: "Andrew", people: ["Andrew", "Dave", "Steve"]},
       {id: 16, venueid: 30, date: "2015/10/28", maxpeople: 3, creator: "Emily", people: ["Emily", "Hannah", "Angela"]},
       {id: 17, venueid: 31, date: "2015/10/28", maxpeople: 3, creator: "Tony", people: ["Tony", "Alexia", "Sue"]},
       {id: 18, venueid: 32, date: "2015/10/15", maxpeople: 4, creator: "Tim", people: ["Tim", "Amanda", "Dave"]},
       {id: 19, venueid: 36, date: "2015/10/14", maxpeople: 4, creator: "Travis", people: ["Travis", "Chris", "Stacey"]},
       {id: 20, venueid: 37, date: "2015/10/12", maxpeople: 2, creator: "Stacey", people: ["Stacey", "Fred"]}
     ];

    // Promise-based API
    return {
      getRecentLunches : function() {
        return $q.when(lunches);
      },
      getLunch : function(lunchId){
        return $q.when(_.find(lunches, {id: lunchId}));
      },
      createLunch : function(lunch){
        var newLunch = {};
        newLunch.id = _.last(lunches).id + 1;
        newLunch.venueid = lunch.venue.id;
        newLunch.date = lunch.date.toISOString().slice(0, 10);;
        newLunch.creator = 'Ray';
        newLunch.maxpeople = 5;
        newLunch.people = ['Ray'];
        lunches.unshift(newLunch)
        return $q.when(newLunch);
      }
    };
  }

})();
