import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.$.getJSON('/api/v1/search/?lat=' + params.lat + '&lng=' + params.lng).then(function (response) {
      return response.trails;
    });
  }
});
