(function(){

  angular
       .module('create')
       .controller('CreateController', [
          'venueService', '$scope', '$mdDialog', '$q',
          CreateController
       ]);

  function CreateController( service, $scope, $mdDialog, $q) {
    var self = this;
    self.cancel = cancel;
    self.venues = [];
    self.querySearch        = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchText         = null;
    self.searchTextChange   = searchTextChange;

    service
      .getAllVenues()
      .then(function(venues){
        self.venues = [].concat(venues);
      });

    function querySearch(query){
      var results = query ? self.venues.filter( createFilterFor(query) ) : [];
      return results;
    }

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(venue) {
        return (venue.name.toLowerCase().indexOf(lowercaseQuery) === 0);
      };
    }

    function selectedItemChange(){
      $log.info('Text changed to ' + text);
    }

    function searchTextChange(){
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    $scope.$on('mapInitialized', function(event, map) {
      var markers = [];
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);

        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        google.maps.event.addListener(searchBox, 'places_changed', function() {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
              return;
            }
            for (var i = 0, marker; marker = markers[i]; i++) {
              marker.setMap(null);
            }

            // For each place, get the icon, place name, and location.
            markers = [];
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
                var image = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                var marker = new google.maps.Marker({
                    map: map,
                    icon: image,
                    title: place.name,
                    position: place.geometry.location
                });

                markers.push(marker);
                bounds.extend(place.geometry.location);
            }

            map.fitBounds(bounds);
        });
    });

    self.lunch = {
      venue: '',
      date: ''
    };

    function cancel(){
      $mdDialog.cancel();
    }
  }

})();
