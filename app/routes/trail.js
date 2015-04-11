import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return $.getJSON('/api/v1/trails/' + params.trail_id).then(function (response) {
      return response.trail;
    });
  }
});
