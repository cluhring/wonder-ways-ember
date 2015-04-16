import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('trails', { path: ':state' }, function () {
    this.resource('trail', { path: ':trail_id' });
  });
});
