import { set } from '@ember/object';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | dot-nav-dot', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DotNavDot />`);

    assert.ok(this.element.querySelector('.link-item'));
  });

  test('should show title', async function(assert) {
    set(this, 'menuItem', {
      current: false,
      route: 'presidents-message',
      title: 'President’s Message',
    });

    await render(hbs`<DotNavDot @menuItem={{this.menuItem}} />`);

    assert.strictEqual(
      this.element.querySelector('.dot-nav-tooltip').textContent.trim(),
      'President’s Message',
    );
  });

  test('should show div element for current page', async function(assert) {
    set(this, 'menuItem', {
      current: true,
      route: 'presidents-message',
      title: 'President’s Message',
    });

    await render(hbs`<DotNavDot @menuItem={{this.menuItem}} />`);

    assert.ok(this.element.querySelector('div.current-page > div.dot-circle'));
  });

  test('should show link element when not current page', async function(assert) {
    set(this, 'menuItem', {
      current: false,
      route: 'presidents-message',
      title: 'President’s Message',
    });

    await render(hbs`<DotNavDot @menuItem={{this.menuItem}} />`);

    assert.ok(this.element.querySelector('a.link-dot > div.dot-circle'));
  });

  // TODO: test mouseEnter

  // TODO: test mouseLeave
});
