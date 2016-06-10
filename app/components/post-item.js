import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    approveItem(comment, model) {
      comment.toggleProperty('approved');
      this.sendAction('approve', model);
    }
  }
});
