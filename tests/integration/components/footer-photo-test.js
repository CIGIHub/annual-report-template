import finishRender from 'annual-report-template/tests/helpers/finish-render';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import Service from '@ember/service';
import hbs from 'htmlbars-inline-precompile';
import lolex from 'lolex';
import { module, test } from 'qunit';

module('Integration | Component | footer-photo', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.clock = lolex.install();
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
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
      currentURL: '',
    }));
  });

  test('it renders', async function(assert) {
    await render(hbs`<FooterPhoto @hasReveal={{true}} />`);

    assert.dom('.footer').exists();
    assert.dom('.footer button').exists();
    assert.dom('.footer button').hasClass('footer-icon-btn');
    assert.dom('.footer .footer-description').doesNotExist();
  });

  test('it renders footer description', async function(assert) {
    this.set('photoCredit', 'Hello world!');

    await render(hbs`<FooterPhoto @hasReveal={{true}} @photoCredit={{this.photoCredit}} />`);

    assert.dom('.footer').exists();
    assert.dom('.footer .footer-description').exists();
    assert.dom('.footer .footer-description').containsText('Hello world!');
  });

  test('should show social menu after click open social menu button', async function(assert) {
    await render(hbs`<FooterPhoto @hasReveal={{true}} />`);

    assert.ok(
      this.element.querySelector('.open-social-menu-btn'),
      '[setup] should find open-social-menu-btn',
    );
    assert.notOk(
      this.element.querySelector('.close-social-menu-btn'),
      '[setup] should not find close-social-menu-btn',
    );
    let social1BtnStyle = this.element.querySelector('.social-1-btn').getAttribute('style');
    assert.notOk(
      social1BtnStyle,
      `[setup] social-1-btn should not have any style - ${social1BtnStyle}`,
    );
    let social2BtnStyle = this.element.querySelector('.social-2-btn').getAttribute('style');
    assert.notOk(
      social2BtnStyle,
      `[setup] social-2-btn should not have any style - ${social2BtnStyle}`,
    );
    let social3BtnStyle = this.element.querySelector('.social-3-btn').getAttribute('style');
    assert.notOk(
      social3BtnStyle,
      `[setup] social-3-btn should not have any style - ${social3BtnStyle}`,
    );

    await click('.open-social-menu-btn');
    await finishRender();
    this.clock.tick(400);

    assert.notOk(
      this.element.querySelector('.open-social-menu-btn'),
      'should not find open-social-menu-btn',
    );
    assert.ok(
      this.element.querySelector('.close-social-menu-btn'),
      'should find close-social-menu-btn',
    );
    social1BtnStyle = this.element.querySelector('.social-1-btn').getAttribute('style');
    assert.ok(
      social1BtnStyle.includes('visibility: visible;'),
      `social-1-btn should have visibility:visible style- ${social1BtnStyle}`,
    );
    assert.ok(
      social1BtnStyle.includes('left: 0px;'),
      `social-1-btn should have left:0px style - ${social1BtnStyle}`,
    );
    assert.ok(
      social1BtnStyle.includes('opacity: 1;'),
      `social-1-btn should have opacity:1 style - ${social1BtnStyle}`,
    );
    social2BtnStyle = this.element.querySelector('.social-2-btn').getAttribute('style');
    assert.ok(
      social2BtnStyle.includes('visibility: visible;'),
      `social-2-btn should have visibility:visible style - ${social2BtnStyle}`,
    );
    assert.ok(
      social2BtnStyle.includes('left: 40px;'),
      `social-2-btn should have left:40px style - ${social2BtnStyle}`,
    );
    assert.ok(
      social2BtnStyle.includes('opacity: 1;'),
      `social-2-btn should have opacity:1 style - ${social2BtnStyle}`,
    );
    social3BtnStyle = this.element.querySelector('.social-3-btn').getAttribute('style');
    assert.ok(
      social3BtnStyle.includes('visibility: visible;'),
      `social-3-btn should have visibility:visible style - ${social3BtnStyle}`,
    );
    assert.ok(
      social3BtnStyle.includes('left: 80px;'),
      `social-3-btn should have left:80px style - ${social3BtnStyle}`,
    );
    assert.ok(
      social3BtnStyle.includes('opacity: 1;'),
      `social-3-btn should have opacity:1 style - ${social3BtnStyle}`,
    );
  });

  test('should close social menu after clicking close social menu button', async function(assert) {
    await render(hbs`<FooterPhoto @hasReveal={{true}} />`);

    await click('.open-social-menu-btn');
    await finishRender();
    this.clock.tick(400);

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
      `[setup] social-1-btn should have visibility:visible style - ${social1BtnStyle}`,
    );
    assert.ok(
      social1BtnStyle.includes('left: 0px;'),
      `[setup] social-1-btn should have left:0px style - ${social1BtnStyle}`,
    );
    assert.ok(
      social1BtnStyle.includes('opacity: 1;'),
      `[setup] social-1-btn should have opacity:1 style - ${social1BtnStyle}`,
    );
    let social2BtnStyle = this.element.querySelector('.social-2-btn').getAttribute('style');
    assert.ok(
      social2BtnStyle.includes('visibility: visible;'),
      `[setup] social-2-btn should have visibility:visible style - ${social2BtnStyle}`,
    );
    assert.ok(
      social2BtnStyle.includes('left: 40px;'),
      `[setup] social-2-btn should have left:40px style - ${social2BtnStyle}`,
    );
    assert.ok(
      social2BtnStyle.includes('opacity: 1;'),
      `[setup] social-2-btn should have opacity:1 style - ${social2BtnStyle}`,
    );
    let social3BtnStyle = this.element.querySelector('.social-3-btn').getAttribute('style');
    assert.ok(
      social3BtnStyle.includes('visibility: visible;'),
      `[setup] social-3-btn should have visibility:visible style - ${social3BtnStyle}`,
    );
    assert.ok(
      social3BtnStyle.includes('left: 80px;'),
      `[setup] social-3-btn should have left:80px style - ${social3BtnStyle}`,
    );
    assert.ok(
      social3BtnStyle.includes('opacity: 1;'),
      `[setup] social-3-btn should have opacity:1 style - ${social3BtnStyle}`,
    );

    await click('.close-social-menu-btn');
    await finishRender();
    this.clock.tick(400);

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
      `social-1-btn should have visibility:hidden style - ${social1BtnStyle}`,
    );
    assert.ok(
      social1BtnStyle.includes('left: 0px;'),
      `social-1-btn should have left:0px style - ${social1BtnStyle}`,
    );
    assert.ok(
      social1BtnStyle.includes('opacity: 0;'),
      `social-1-btn should have opacity:0 style - ${social1BtnStyle}`,
    );
    social2BtnStyle = this.element.querySelector('.social-2-btn').getAttribute('style');
    assert.ok(
      social2BtnStyle.includes('visibility: hidden;'),
      `social-2-btn should have visibility:hidden style - ${social2BtnStyle}`,
    );
    assert.ok(
      social2BtnStyle.includes('left: 0px;'),
      `social-2-btn should have left:0px style - ${social2BtnStyle}`,
    );
    assert.ok(
      social2BtnStyle.includes('opacity: 0;'),
      `social-2-btn should have opacity:0 style - ${social2BtnStyle}`,
    );
    social3BtnStyle = this.element.querySelector('.social-3-btn').getAttribute('style');
    assert.ok(
      social3BtnStyle.includes('visibility: hidden;'),
      `social-3-btn should have visibility:hidden style - ${social3BtnStyle}`,
    );
    assert.ok(
      social3BtnStyle.includes('left: 0px;'),
      `social-3-btn should have left:0px style - ${social3BtnStyle}`,
    );
    assert.ok(
      social3BtnStyle.includes('opacity: 0;'),
      `social-3-btn should have opacity:0 style - ${social3BtnStyle}`,
    );
  });
});
