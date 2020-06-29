import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | hover-reveal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<HoverReveal />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <HoverReveal>
        template block text
      </HoverReveal>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
