import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('community');
  },

  actions: {
    save() {
      var post = this.get('community');
      return post.save()
        .then(res => this.notify.success('saved'))
        .catch(err => this.notify.error(err, 'error'));
    }
  }
});
