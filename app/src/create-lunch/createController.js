(function(){

  angular
       .module('create')
       .controller('CreateController', [
          'venueService', 'lunchService', '$scope', '$mdDialog', '$q',
          CreateController
       ]);

  function CreateController( venueService, lunchService, $scope, $mdDialog, $q) {
    var self = this;
    self.cancel = cancel;
    self.venues = [];
    self.map = null;
    self.querySearch        = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.createLunch        = createLunch;
    self.searchText         = null;
    self.markers            = [];

    venueService
      .getAllVenues()
      .then(function(venues){
        self.venues = [].concat(venues);
      });

    function createLunch(){
      lunchService.createLunch(self.lunch)
      .then(function(){
        $scope.$emit('lunchAdded');
        self.cancel();
      })
    }

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

    function selectedItemChange(item){
      if(!item) return;

      clearMarkers();
      self.lunch.venue = item;
      var lat = parseFloat(self.lunch.venue.location.split(',')[0]);
      var lng = parseFloat(self.lunch.venue.location.split(',')[1]);
      self.map.setCenter({lat: lat, lng: lng});
      var marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: self.map});
      self.markers.push(marker);
      document.getElementById('pac-input').value = item.address;
    }

    function clearMarkers(){
      for (var i = 0, marker; marker = self.markers[i]; i++) {
        marker.setMap(null);
      }

      // For each place, get the icon, place name, and location.
      self.markers = [];
    }

    $scope.$on('mapInitialized', function(event, map) {

        self.map = map;
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

            clearMarkers();

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

                self.markers.push(marker);
                bounds.extend(place.geometry.location);
            }

            map.fitBounds(bounds);
        });
    });

    self.lunch = {
      venue: {location: '-37.782, 175.352'},
      date: ''
    };

    function cancel(){
      $mdDialog.cancel();
    }
  }

})();
