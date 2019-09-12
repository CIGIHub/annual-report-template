import { set } from '@ember/object';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import Service from '@ember/service';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | top-bar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:lightbox', Service.extend({
      showLightbox: null,
      closeLightBox() {
        set(this, 'showLightbox', null);
      },
      showTableOfContents() {
        set(this, 'showLightbox', 'tableofcontents');
      },
    }));
  });

  test('it renders', async function(assert) {
    await render(hbs`<TopBar />`);

    assert.ok(this.element.querySelector('.cigi-top-bar'));
  });

  test('should show close menu button after clicking open menu button', async function(assert) {
    await render(hbs`<TopBar />`);
    assert.ok(this.element.querySelector('.open-menu-btn'));
    assert.notOk(this.element.querySelector('.close-menu-btn'));

    await click('.open-menu-btn');

    assert.notOk(this.element.querySelector('.open-menu-btn'));
    assert.ok(this.element.querySelector('.close-menu-btn'));
  });
});
