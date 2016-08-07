import DS from 'ember-data';

export default DS.Model.extend({
  value: DS.attr('number'),
  sensor: DS.belongsTo('sensor'),
  updatedAt: DS.attr('date')
});
