import DS from 'ember-data';
import attr from 'ember-data/attr';
import MF from 'model-fragments';
import { fragmentArray, array } from 'model-fragments/attributes';

export default MF.Fragment.extend({
  name: attr('string'),
  approved: attr('boolean'),
  users: array()
});
