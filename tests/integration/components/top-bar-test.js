import finishRender from 'annual-report-2019/tests/helpers/finish-render';
import { set } from '@ember/object';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import Service from '@ember/service';
import hbs from 'htmlbars-inline-precompile';
import lolex from 'lolex';
import { module, test } from 'qunit';

module('Integration | Component | top-bar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.clock = lolex.install();
    this.owner.register('service:intl', Service.extend({
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
  });

  test('it renders', async function(assert) {
    await render(hbs`<TopBar @currentRoute="index" />`);

    assert.ok(this.element.querySelector('.cigi-top-bar'));
  });

  test('should show close menu button after clicking open menu button', async function(assert) {
    await render(hbs`<TopBar @currentRoute="index" />`);
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
    await render(hbs`<TopBar @currentRoute="index" />`);
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

  test('should show social menu after clicking open social menu button', async function(assert) {
    await render(hbs`<TopBar @currentRoute="index" />`);
    assert.ok(
      this.element.querySelector('.open-social-menu-btn'),
      '[setup] should find open-social-menu-btn',
    );
    assert.notOk(
      this.element.querySelector('.close-social-menu-btn'),
      '[setup] should not find close-social-menu-btn',
    );
    assert.notOk(
      this.element.querySelector('.social-1-btn').getAttribute('style'),
      '[setup] social-1-btn should not have any style',
    );
    assert.notOk(
      this.element.querySelector('.social-2-btn').getAttribute('style'),
      '[setup] social-2-btn should not have any style',
    );
    assert.notOk(
      this.element.querySelector('.social-3-btn').getAttribute('style'),
      '[setup] social-3-btn should not have any style',
    );

    await click('.open-social-menu-btn');
    await finishRender();
    this.clock.tick(305);

    assert.notOk(
      this.element.querySelector('.open-social-menu-btn'),
      'should not find open-social-menu-btn',
    );
    assert.ok(
      this.element.querySelector('.close-social-menu-btn'),
      'should find close-social-menu-btn',
    );
    const social1BtnStyle = this.element.querySelector('.social-1-btn').getAttribute('style');
    assert.ok(
      social1BtnStyle.includes('visibility: visible;'),
      'social-1-btn should have visibility:visible style',
    );
    assert.ok(
      social1BtnStyle.includes('left: 0px;'),
      'social-1-btn should have left:0px style',
    );
    assert.ok(
      social1BtnStyle.includes('opacity: 1;'),
      'social-1-btn should have opacity:1 style',
    );
    const social2BtnStyle = this.element.querySelector('.social-2-btn').getAttribute('style');
    assert.ok(
      social2BtnStyle.includes('visibility: visible;'),
      'social-2-btn should have visibility:visible style',
    );
    assert.ok(
      social2BtnStyle.includes('left: 0px;'),
      'social-2-btn should have left:0px style',
    );
    assert.ok(
      social2BtnStyle.includes('opacity: 1;'),
      'social-2-btn should have opacity:1 style',
    );
    const social3BtnStyle = this.element.querySelector('.social-3-btn').getAttribute('style');
    assert.ok(
      social3BtnStyle.includes('visibility: visible;'),
      'social-3-btn should have visibility:visible style',
    );
    assert.ok(
      social3BtnStyle.includes('left: 0px;'),
      'social-3-btn should have left:0px style',
    );
    assert.ok(
      social3BtnStyle.includes('opacity: 1;'),
      'social-3-btn should have opacity:1 style',
    );
  });

  test('should close social menu after clicking close social menu button', async function(assert) {
    await render(hbs`<TopBar @currentRoute="index" />`);
    await click('.open-social-menu-btn');
    await finishRender();
    this.clock.tick(305);
    assert.notOk(
      this.element.querySelector('.open-social-menu-btn'),
      '[setup] should not find open-social-menu-btn',
    );
    assert.ok(
      this.element.querySelector('.close-social-menu-btn'),
      '[setup] should find close-social-menu-btn',
    );
    let social1BtnStyle = this.element.querySelector('.social-1-btn').getAttribute('style');
    assert.ok(
      social1BtnStyle.includes('visibility: visible;'),
      '[setup] social-1-btn should have visibility:visible style',
    );
    assert.ok(
      social1BtnStyle.includes('left: 0px;'),
      '[setup] social-1-btn should have left:0px style',
    );
    assert.ok(
      social1BtnStyle.includes('opacity: 1;'),
      '[setup] social-1-btn should have opacity:1 style',
    );
    let social2BtnStyle = this.element.querySelector('.social-2-btn').getAttribute('style');
    assert.ok(
      social2BtnStyle.includes('visibility: visible;'),
      '[setup] social-2-btn should have visibility:visible style',
    );
    assert.ok(
      social2BtnStyle.includes('left: 0px;'),
      '[setup] social-2-btn should have left:0px style',
    );
    assert.ok(
      social2BtnStyle.includes('opacity: 1;'),
      '[setup] social-2-btn should have opacity:1 style',
    );
    let social3BtnStyle = this.element.querySelector('.social-3-btn').getAttribute('style');
    assert.ok(
      social3BtnStyle.includes('visibility: visible;'),
      '[setup] social-3-btn should have visibility:visible style',
    );
    assert.ok(
      social3BtnStyle.includes('left: 0px;'),
      '[setup] social-3-btn should have left:0px style',
    );
    assert.ok(
      social3BtnStyle.includes('opacity: 1;'),
      '[setup] social-3-btn should have opacity:1 style',
    );

    await click('.close-social-menu-btn');
    await finishRender();
    this.clock.tick(305);

    assert.ok(
      this.element.querySelector('.open-social-menu-btn'),
      'should find open-social-menu-btn',
    );
    assert.notOk(
      this.element.querySelector('.close-social-menu-btn'),
      'should not find close-social-menu-btn',
    );
    social1BtnStyle = this.element.querySelector('.social-1-btn').getAttribute('style');
    assert.ok(
      social1BtnStyle.includes('visibility: hidden;'),
      'social-1-btn should have visibility:hidden style',
    );
    assert.ok(
      social1BtnStyle.includes('left: 120px;'),
      'social-1-btn should have left:120px style',
    );
    assert.ok(
      social1BtnStyle.includes('opacity: 0;'),
      'social-1-btn should have opacity:0 style',
    );
    social2BtnStyle = this.element.querySelector('.social-2-btn').getAttribute('style');
    assert.ok(
      social2BtnStyle.includes('visibility: hidden;'),
      'social-2-btn should have visibility:hidden style',
    );
    assert.ok(
      social2BtnStyle.includes('left: 80px;'),
      'social-2-btn should have left:80px style',
    );
    assert.ok(
      social2BtnStyle.includes('opacity: 0;'),
      'social-2-btn should have opacity:0 style',
    );
    social3BtnStyle = this.element.querySelector('.social-3-btn').getAttribute('style');
    assert.ok(
      social3BtnStyle.includes('visibility: hidden;'),
      'social-3-btn should have visibility:hidden style',
    );
    assert.ok(
      social3BtnStyle.includes('left: 40px;'),
      'social-3-btn should have left:40px style',
    );
    assert.ok(
      social3BtnStyle.includes('opacity: 0;'),
      'social-3-btn should have opacity:0 style',
    );
  });
});
