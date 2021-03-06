import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  unit: DS.attr('string'),
  last: DS.attr('number'),
  minimum: DS.attr('number'),
  maximum: DS.attr('number'),
  logs: DS.hasMany('log')
});
