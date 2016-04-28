import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('timer-circle', 'Integration | Component | timer circle', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{timer-circle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#timer-circle}}
      template block text
    {{/timer-circle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
