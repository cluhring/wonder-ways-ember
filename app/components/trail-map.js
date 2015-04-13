/* globals L */

import Ember from 'ember';

export default Ember.Component.extend({

  map: null,
  classNames: ['trail-map'],

  didInsertElement: function () {

    L.mapbox.accessToken = 'pk.eyJ1IjoibHlkaWFzMzAzIiwiYSI6ImM0WG9rY28ifQ.bM1Nx1fsDmbAFLVP1f9Img';

    let map = L.mapbox.map(this.elementId, 'lydias303.4be232dc');
    this.set('map', map);

    map.setView([this.get('trail.lat'), this.get('trail.lng')], 15);
  }

});
