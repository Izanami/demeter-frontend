import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sensors-listing', 'Integration | Component | sensors listing', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('sensors', [{}]);
  this.render(hbs`{{sensors-listing sensors=sensors}}`);

  assert.equal(this.$('tbody tr').length, 1);

  // Template block usage:
  this.render(hbs`
    {{#sensors-listing}}
      template block text
    {{/sensors-listing}}
  `);

  //assert.equal(this.$().text().trim(), 'template block text');
});
