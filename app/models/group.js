import DS from 'ember-data';
import MF from 'model-fragments';
import { fragmentArray } from 'model-fragments/attributes';

export default MF.Fragment.extend({
  comments: fragmentArray('comment')
});
