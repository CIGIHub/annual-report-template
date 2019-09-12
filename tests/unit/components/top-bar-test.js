import { get, set } from '@ember/object';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';

module('Unit | Component | top-bar', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:intl', Service.extend({
      t() {
        return '2019 CIGI Annual Report';
      },
    }));
    this.owner.register('service:lightbox', Service.extend({
      showLightbox: null,
    }));
  });

  test('should hide menu when on table of contents route', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'currentRoute', 'table-of-contents');

    assert.strictEqual(get(component, 'hideMenu'), true);
  });

  test('should not hide menu on any other route', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();

    assert.strictEqual(get(component, 'hideMenu'), false);
  });

  test('should have menuIsOpen=false with no lightbox open', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'lightbox.showLightbox', null);

    assert.strictEqual(get(component, 'menuIsOpen'), false);
  });

  test('should have menuIsOpen=true with table of contents lightbox', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(component, 'menuIsOpen'), true);
  });

  test('should have menuIsOpen=false with another lightbox type', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'lightbox.showLightbox', 'youtube');

    assert.strictEqual(get(component, 'menuIsOpen'), false);
  });

  test('should have correct share links for /', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'currentRoute', 'index');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/',
      'should have correct twitterShareLink',
    );
  });
});
