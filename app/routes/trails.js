import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return $.getJSON('/api/v1/trails').then(function (response) {
      return response.trails;
    });
  }
});
