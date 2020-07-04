import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | footer-photo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<FooterPhoto />`);

    assert.dom('.footer').exists();
    assert.dom('.footer button').exists();
    assert.dom('.footer button').hasClass('footer-icon-btn');
    assert.dom('.footer .footer-description').doesNotExist();
  });

  test('it renders footer description', async function(assert) {
    this.set('photoCredit', 'Hello world!');

    await render(hbs`<FooterPhoto @photoCredit={{this.photoCredit}} />`);

    assert.dom('.footer').exists();
    assert.dom('.footer .footer-description').exists();
    assert.dom('.footer .footer-description').containsText('Hello world!');
  });
});
