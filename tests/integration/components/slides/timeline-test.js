import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | slides/timeline', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('nodes', []);

    await render(hbs`<Slides::Timeline @nodes={{this.nodes}} />`);

    assert.dom('.timeline').exists();
  });
});
