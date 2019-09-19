import { set } from '@ember/object';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | slide-content', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<SlideContent />`);

    assert.ok(this.element.querySelector('.slide-content'));
  });

  test('should display slide title', async function(assert) {
    set(this, 'slideTitle', 'Test Slide Title');

    await render(hbs`<SlideContent @slideTitle={{this.slideTitle}} />`);

    assert.ok(
      this.element.querySelector('.slide-title'),
      'should find slide-title',
    );
    assert.strictEqual(
      this.element.querySelector('.slide-title').textContent.trim(),
      'Test Slide Title',
      'should have correct slide title',
    );
  });
});
