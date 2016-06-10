import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  approvedComments: computed('community.top.comments.length', function () {
    var comments = this.get('community.top.comments');

    return comments.filterBy('hasDirtyAttributes', false);
  })
});
