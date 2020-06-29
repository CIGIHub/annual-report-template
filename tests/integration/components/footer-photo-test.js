import { get, set } from '@ember/object';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | footer-photo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<FooterPhoto />`);

    assert.ok(this.element.querySelector('.footer'));
  });

  test('should set revealToggle=true on footer-icon-btn click when revealToggle=false', async function(assert) {
    set(this, 'revealToggle', false);

    await render(hbs`<FooterPhoto @revealToggle={{this.revealToggle}} />`);
    assert.ok(
      this.element.querySelector('.footer-icon-btn'),
      'should find footer-icon-btn',
    );

    await click('.footer-icon-btn');

    assert.strictEqual(this.revealToggle, true);
  });

  test('should set revealToggle=false on footer-icon-btn click when revealToggle=true', async function(assert) {
    set(this, 'revealToggle', true);

    await render(hbs`<FooterPhoto @revealToggle={{this.revealToggle}} />`);
    assert.ok(
      this.element.querySelector('.footer-icon-btn'),
      'should find footer-icon-btn',
    );

    await click('.footer-icon-btn');

    assert.strictEqual(this.revealToggle, false);
  });
});
