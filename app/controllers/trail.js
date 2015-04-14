import Ember from 'ember';

export default Ember.Controller.extend({

  birds: function () {
    let allSpecies = this.get('model').species;

    function filterByHasClip(obj) {
       return (obj.clip_url != "not available");
    };

    var birds = allSpecies.filter(filterByHasClip);

    return birds;
  }.property('model')
});
