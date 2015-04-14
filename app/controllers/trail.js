import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    showActivities: function(item) {
      Ember.$(item).show();
      Ember.$('.birds').hide();
      Ember.$('.animals').hide();
      Ember.$('.plants').hide();
    },

    showBirds: function() {
      Ember.$('.activities').hide();
      Ember.$('.birds').show();
      Ember.$('.animals').hide();
      Ember.$('.plants').hide();
    },

    showAnimals: function() {
      Ember.$('.activities').hide();
      Ember.$('.birds').hide();
      Ember.$('.animals').show();
      Ember.$('.plants').hide();
    },

    showPlants: function() {
      Ember.$('.activities').hide();
      Ember.$('.birds').hide();
      Ember.$('.animals').hide();
      Ember.$('.plants').show();
    },

  },

  birds: function () {
    let allSpecies = this.get('model').species;

    function filterByHasClip(obj) {
       return (obj.clip_url !== "not available");
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
