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
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
    }));
  });

  test('it exists', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    assert.ok(component);
  });

  test('should hide menu when on table of contents route', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'table-of-contents');

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
    set(component, 'router.currentRouteName', 'index');

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

  test('should have correct share links for /a-bretton-woods-moment-for-the-digital-age', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'a-bretton-woods-moment-for-the-digital-age');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/a-bretton-woods-moment-for-the-digital-age',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/a-bretton-woods-moment-for-the-digital-age',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/a-bretton-woods-moment-for-the-digital-age',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /slide2', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'slide-2');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/slide-2',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/slide-2',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/slide-2',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /braiding-legal-orders', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'braiding-legal-orders');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/braiding-legal-orders',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/braiding-legal-orders',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/braiding-legal-orders',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /slide1', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'slide1');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/slide1',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/slide1',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/slide1',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /chairs-message', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/chairs-message',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/chairs-message',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/chairs-message',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /curbing-cultural-appropriation-through-intellectual-property-law', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property-law');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property-law',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property-law',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/curbing-cultural-appropriation-through-intellectual-property-law',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/exploring-the-four-internets-and-the-geopolitics-of-digital-governance',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/exploring-the-four-internets-and-the-geopolitics-of-digital-governance',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/exploring-the-four-internets-and-the-geopolitics-of-digital-governance',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /financials/auditors-report', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/auditors-report',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/auditors-report',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/auditors-report',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /financials/balance-sheet', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'financials.balance-sheet');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/balance-sheet',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/balance-sheet',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/balance-sheet',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /financials/notes', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/notes',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/notes',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/notes',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /financials/revenue-and-expenses', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'financials.revenue-and-expenses');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/financials/revenue-and-expenses',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/financials/revenue-and-expenses',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/financials/revenue-and-expenses',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /governing-cyberspace-during-a-crisis-in-trust', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'governing-cyberspace-during-a-crisis-in-trust');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/governing-cyberspace-during-a-crisis-in-trust',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/governing-cyberspace-during-a-crisis-in-trust',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/governing-cyberspace-during-a-crisis-in-trust',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /governing-the-digital-public-sphere', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'governing-the-digital-public-sphere');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/governing-the-digital-public-sphere',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/governing-the-digital-public-sphere',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/governing-the-digital-public-sphere',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/informing-the-debate-around-internet-security-and-trust',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/informing-the-debate-around-internet-security-and-trust',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/informing-the-debate-around-internet-security-and-trust',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/media-and-mass-atrocity-the-rwanda-genocide-and-beyond',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/media-and-mass-atrocity-the-rwanda-genocide-and-beyond',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/media-and-mass-atrocity-the-rwanda-genocide-and-beyond',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /models-for-data-governance', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'models-for-data-governance');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/models-for-data-governance',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/models-for-data-governance',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/models-for-data-governance',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /outputs-and-activities', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/outputs-and-activities',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /presidents-message', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/presidents-message',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/presidents-message',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/presidents-message',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /protecting-elections-from-foreign-interference', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'protecting-elections-from-foreign-interference');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/protecting-elections-from-foreign-interference',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/protecting-elections-from-foreign-interference',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/protecting-elections-from-foreign-interference',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /table-of-contents', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/table-of-contents',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/table-of-contents',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/table-of-contents',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /thank-you', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/thank-you',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/thank-you',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/thank-you',
      'should have correct twitterShareLink',
    );
  });

  test('should have correct share links for /timeline', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();
    set(component, 'router.currentRouteName', 'timeline');

    assert.strictEqual(
      get(component, 'shareRoute'),
      'https://www.cigionline.org/interactives/2019annualreport/timeline',
      'should have correct shareRoute',
    );
    assert.strictEqual(
      get(component, 'linkedInShareLink'),
      'https://www.linkedin.com/shareArticle?mini=true&url=https://www.cigionline.org/interactives/2019annualreport/timeline',
      'should have correct linkedInShareLink',
    );
    assert.strictEqual(
      get(component, 'twitterShareLink'),
      'https://twitter.com/intent/tweet?status=2019+CIGI+Annual+Report+https://www.cigionline.org/interactives/2019annualreport/timeline',
      'should have correct twitterShareLink',
    );
  });
});
