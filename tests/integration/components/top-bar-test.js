import { set } from '@ember/object';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | top-bar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', Service.extend({
      off() {
        return '';
      },
      on() {
        return '';
      },
      t() {
        return '';
      },
    }));
    this.owner.register('service:lightbox', Service.extend({
      showLightbox: null,
      closeLightbox() {
        set(this, 'showLightbox', null);
      },
      showTableOfContents() {
        set(this, 'showLightbox', 'tableofcontents');
      },
    }));
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
      currentURL: '',
    }));
  });

  test('it renders', async function(assert) {
    await render(hbs`<TopBar />`);

    assert.ok(this.element.querySelector('.cigi-top-bar'));
  });

  test('should show close menu button after clicking open menu button', async function(assert) {
    await render(hbs`<TopBar />`);
    assert.ok(
      this.element.querySelector('.open-menu-btn'),
      '[setup] should find open-menu-btn',
    );
    assert.notOk(
      this.element.querySelector('.close-menu-btn'),
      '[setup] should not find close-menu-btn',
    );

    await click('.open-menu-btn');

    assert.notOk(
      this.element.querySelector('.open-menu-btn'),
      'should not find open-menu-btn',
    );
    assert.ok(
      this.element.querySelector('.close-menu-btn'),
      'should find close-menu-btn',
    );
  });

  test('should show open menu button after clicking close menu button', async function(assert) {
    await render(hbs`<TopBar />`);
    await click('.open-menu-btn');
    assert.notOk(
      this.element.querySelector('.open-menu-btn'),
      '[setup] should not find open-menu-btn',
    );
    assert.ok(
      this.element.querySelector('.close-menu-btn'),
      '[setup] should find close-menu-btn',
    );

    await click('.close-menu-btn');

    assert.ok(
      this.element.querySelector('.open-menu-btn'),
      'should find open-menu-btn',
    );
    assert.notOk(
      this.element.querySelector('.close-menu-btn'),
      'should not find close-menu-btn',
    );
  });
});
