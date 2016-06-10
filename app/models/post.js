import Model from 'ember-data/model';
import { fragment } from 'model-fragments/attributes';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  top: fragment('group')
});
