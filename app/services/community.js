import Ember from 'ember';

const { computed, inject, ObjectProxy, PromiseProxyMixin } = Ember;

export default ObjectProxy.extend(PromiseProxyMixin, {
  store: inject.service(),

  promise: computed({
    get() {
      var store = this.get('store');

      return store.findRecord('post', 1)
        .then(data => {
          this.set('content', data);
          return data;
        });
    }
  }),

  save() {
    var model = this.get('content');

    if (model) {
      return model.save(...arguments);
    }
  },

  reload() {
    var model = this.get('content');

    if (model) {
      return model.reload(...arguments);
    }
  }
}).reopenClass({
  isServiceFactory: true
});
