import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sensors-listing-radial', 'Integration | Component | sensors listing radial', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.set('sensors', [{}]);
  this.render(hbs`{{sensors-listing-radial sensors=sensors}}`);

  assert.equal(this.$('.radial').length, 1);

  this.set('sensors', [{name: 'Foo'}, {name: 'Baz'}]);
  assert.equal(this.$('.radial').length, 2);

  // Template block usage:
  this.render(hbs`
    {{#sensors-listing-radial}}
      template block text
    {{/sensors-listing-radial}}
  `);

  //assert.equal(this.$().text().trim(), 'template block text');
});
