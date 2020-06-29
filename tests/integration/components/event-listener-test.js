import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | event-listener', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<EventListener />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <EventListener>
        template block text
      </EventListener>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
