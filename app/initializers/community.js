export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('controller', 'community', 'service:community');
  application.inject('route', 'community', 'service:community');
  application.inject('model', 'community', 'service:community');
  application.inject('component', 'community', 'service:community');
}

export default {
  name: 'community',
  after: 'store',
  initialize: initialize
};
