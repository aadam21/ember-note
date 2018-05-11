import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNote: function() {
      this.get('note').save(); //Getting and saving an existing record results in a PUT
    },
    closeNote: function() {
      this.sendAction('close');
    }
  }
});
