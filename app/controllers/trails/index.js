import Ember from 'ember';

export default Ember.Controller.extend({

  searchTerm: '',
  selectedState: '',

  filteredTrails: function () {
    let searchTerm = this.get('searchTerm');
    let trails = this.get('model');

    if (searchTerm) {
      return trails.filter((trail) => {
        let keys = Object.keys(trail);
        let isMatching = false;
        keys.forEach((key) => {
          if (trail[key] && trail[key].toString().includes(searchTerm)) { isMatching = true; }
        });
        return isMatching;
      });
    }

    return trails;
  }.property('searchTerm', 'model'),

  stateTrails: function () {
    let selectedState = this.get('selectedState');
    let trails = this.get('model');

    return trails.filter((obj) => {
      return obj.state === selectedState;
    });
  }.property('selectedState'),

});
