import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('notebook',{user: params.user_id});
  },
  actions: {
    addNotebook: function() {
      let notebook = this.store.createRecord('notebook', { // Creates notebook in the store
        title: this.controller.get('title'),
        user: this.controllerFor('application').get('user')
      });
      notebook.save().then(() => {
        this.controller.set('title', null);
        this.refresh();
      }, function() {
        alert('save failed')
      });
    }
  }
});
