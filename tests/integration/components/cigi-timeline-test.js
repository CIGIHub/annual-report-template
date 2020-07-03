import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | cigi-timeline', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('nodes', []);
    await render(hbs`<CigiTimeline @nodes={{this.nodes}} />`);

    assert.ok(this.element.querySelector('.timeline'));
  });
});
