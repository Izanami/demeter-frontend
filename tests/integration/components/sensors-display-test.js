import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sensors-display', 'Integration | Component | sensors display', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sensors-display}}`);

  assert.equal(this.$('div').length, 3);
  assert.equal(this.$('div a').length, 2);

  // Template block usage:
  this.render(hbs`
    {{#sensors-display}}
      template block text
    {{/sensors-display}}
  `);
});
