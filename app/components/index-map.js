/* globals L */

import Ember from 'ember';

export default Ember.Component.extend({

  map: null,
  classNames: ['index-map'],

  didInsertElement: function () {
    let trails = this.get('trails');
    L.mapbox.accessToken = 'pk.eyJ1IjoibHlkaWFzMzAzIiwiYSI6ImM0WG9rY28ifQ.bM1Nx1fsDmbAFLVP1f9Img';

    let map = L.mapbox.map(this.elementId, 'lydias303.4be232dc');
    this.set('map', map);

    // let lat = this.get('trail.lat');
    //
    // let lng = this.get('trail.lng');

    let points = function () {
      let output = [];
      trails.forEach(function(trail) {
        console.log(trail);
        let point = { "type": "Feature",
          "geometry": {"type": "Point", "coordinates": [trail.lng, trail.lat]},
          "properties": {"marker-symbol": "park", "marker-color": "#0C5CFE", "marker-size": "large"}
        };
        output.push(point);
      });
      return output
    };

    map.setView([trails[5].lat, trails[5].lng], 6);

    var pointSet = { "type": "FeatureCollection",
      "features": points()
    };

  var myLayer = L.mapbox.featureLayer(pointSet).bindPopup('Hi, Steve').addTo(map);

}
});
