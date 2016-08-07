import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('graph-radial', 'Integration | Component | graph radial', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{graph-radial}}`);

  assert.equal(this.$('.graph').length, 1);

  let svg_all = this.$('.graph svg');
  assert.equal(svg_all.length, 1);

  let svg = svg_all.first();

  /* Svg attributes */
  assert.equal(svg.attr('height') !== undefined, true, 'Has height attr');
  assert.equal(svg.attr('width') !== undefined, true, 'Has width attr');

  // Template block usage:
  this.render(hbs`
    {{#graph-radial}}
      template block text
    {{/graph-radial}}
  `);


  assert.equal(this.$('.graph').length, 1);
});


test('name', function(assert) {
    this.set('t', 'Baz');

    this.render(hbs`{{graph-radial name=t}}`);
    assert.equal($('svg #name').text(), 'Baz');


    this.set('t', 'Foo');
    assert.equal($('svg #name').text(), 'Foo');
});
