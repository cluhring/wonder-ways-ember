import DS from 'ember-data';

export default DS.Model.extend({
  trailId: DS.attr('integer'),
  name: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  lat: DS.attr('decimal'),
  lng: DS.attr('decimal'),
  directions: DS.attr('text'),
  description: DS.attr('text')

});
