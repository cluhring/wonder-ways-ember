import Ember from 'ember';

export default Ember.Controller.extend({

  trailActivities: Ember.computed.alias('model.activities'),

  selectedBird: null,

  actions: {
    filter: function(category) {
      Ember.$('.categoryType').hide();
      Ember.$(category).show();
    },
    selectBird: function (bird) {
      this.set('selectedBird', bird);
    }
  },

  birds: function () {
    let allSpecies = this.get('model').species;

    function filterByHasClip(obj) {
       return (obj.clip_url !== "not available" && obj.clip_url !== "not found");
    }

    var birds = allSpecies.filter(filterByHasClip);

    return birds;
  }.property('model'),

  plants: function () {
    let allSpecies = this.get('model').species;

    function filterByKingdom(obj) {
       return (obj.kingdom === "Plantae");
    }

    var plants = allSpecies.filter(filterByKingdom);

    return plants;
  }.property('model'),

  animals: function () {
    let allSpecies = this.get('model').species;

    function filterByKingdom(obj) {
       return (obj.kingdom === "Animalia");
    }

    var animals = allSpecies.filter(filterByKingdom);

    return animals;
  }.property('model')
});
