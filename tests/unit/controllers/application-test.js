import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';
import lolex from 'lolex';
import { module, test } from 'qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.clock = lolex.install();
    this.owner.register('service:lightbox', Service.extend({
      showLightbox: null,
    }));
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
    }));
  });

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });

  // TEST COMPUTED: bounceScrollArrowDown

  test('should have bounceScrollArrowDown=true for /en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.index');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), true);
  });

  test('should have bounceScrollArrowDown=false for /en/slide10-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-10');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide2-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-2');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide7-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-7');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide1-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-1');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.chairs-message');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide13-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-13');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide12-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-12');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'fina  ncials.notes');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide4-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-4');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide5-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-5');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide11-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-11');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide6-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-6');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide8-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-8');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide3-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-3');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.outputs-and-activities');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.presidents-message');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/slide9-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-9');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /en/table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.table-of-contents');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have hideMobileOverlay=false for /en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.index');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide10-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-10');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide2-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-2');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide7-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-7');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide1-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-1');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /en/chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.chairs-message');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /en/slide13-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-13');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide12-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-12');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /en/slide4-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-4');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide5-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-5');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide11-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-11');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide6-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-6');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide8-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-8');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /en/slide3-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-3s');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /en/outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.outputs-and-activities');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /en/presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.presidents-message');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /en/slide9-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-9');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /en/table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.table-of-contents');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  // TEST COMPUTED: lightBackground

  test('should have lightBackground=false for /en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.index');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide10-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-10');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide2-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-2');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide7-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-7');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide1-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-1');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /en/chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.chairs-message');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /en/chairs-message when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.chairs-message');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide13-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-13');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide12-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-12');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=true for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=true for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /financials/auditors-report when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide4-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-4');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide5-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-5');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide11-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-11');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide6-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-6');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide8-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-8');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide3-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-3');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /en/outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.outputs-and-activities');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /en/outputs-and-activities when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.outputs-and-activities');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /en/presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.presidents-message');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /en/presidents-message when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.presidents-message');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/slide9-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-9');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /en/table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.table-of-contents');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  // TEST COMPUTED: scrollableContentPage

  test('should have scrollableContentPage=false for /en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.index');

    assert.strictEqual(get(controller, 'scrollableContentPage'), false);
  });

  test('should have scrollableContentPage=true for /en/slide10-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-10');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide2-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-2');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide7-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-7');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide1-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-1');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.chairs-message');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide13-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-13');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide12-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-12');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide4-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-4');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide5-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-5');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide11-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-11');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide6-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-6');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide8-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-8');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide3-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-3');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.outputs-and-activities');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.presidents-message');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/slide9-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-9');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /en/table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.table-of-contents');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'scrollableContentPage'), false);
  });

  test('should have scrollableContentPage=false for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'scrollableContentPage'), false);
  });

  // TEST COMPUTED: showDotNav

  test('should have showDotNav=false for /en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.index');

    assert.strictEqual(get(controller, 'showDotNav'), false);
  });

  test('should have showDotNav=true for /en when the dot-nav has already been shown', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'dotNavShown', true);
    set(controller, 'router.currentRouteName', 'en.index');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide10-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-10');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide2-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-2');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide7-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-7');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide1-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-1');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.chairs-message');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide13-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-13');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide12-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-12');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/summarized-statement-of-financial-position', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-financial-position');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide4-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-4');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide5-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-5');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide11-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-11');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide6-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-6');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide8-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-8');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide3-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-3');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.outputs-and-activities');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.presidents-message');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /en/slide9-en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.slide-9');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=false for /en/table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.table-of-contents');

    assert.strictEqual(get(controller, 'showDotNav'), false);
  });

  test('should have showDotNav=true for /en/table-of-contents when the dot-nav has already been shown', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'dotNavShown', true);
    set(controller, 'router.currentRouteName', 'en.table-of-contents');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  // TEST COMPUTED: showScrollArrowDown

  test('should have showScrollArrowDown=true for /en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.index');

    assert.strictEqual(get(controller, 'showScrollArrowDown'), true);
  });

  test('should have showScrollArrowDown=true for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'timeline');

    assert.strictEqual(get(controller, 'showScrollArrowDown'), true);
  });

  test('should have showScrollArrowDown=false for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'showScrollArrowDown'), false);
  });

  test('should have showScrollArrowDown=false for /404', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', '404');

    assert.strictEqual(get(controller, 'showScrollArrowDown'), false);
  });

  // TEST COMPUTED: showScrollArrowUp

  test('should have showScrollArrowUp=false for /en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.index');

    assert.strictEqual(get(controller, 'showScrollArrowUp'), false);
  });

  test('should have showScrollArrowUp=true for /en/table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'en.table-of-contents');

    assert.strictEqual(get(controller, 'showScrollArrowUp'), true);
  });

  test('should have showScrollArrowUp=true for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'thank-you');

    assert.strictEqual(get(controller, 'showScrollArrowUp'), true);
  });

  test('should have showScrollArrowUp=false for /404', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', '404');

    assert.strictEqual(get(controller, 'showScrollArrowUp'), false);
  });

  // TEST ACTION: transitionBack

  test('should immediately clear isTransitioning for /en', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'en.index');

    controller.send('transitionBack');

    assert.strictEqual(get(controller, 'isTransitioning'), false);
  });

  test('should transition for 1500ms for /en/table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'en.table-of-contents');

    controller.send('transitionBack');

    assert.strictEqual(get(controller, 'isTransitioning'), true);
    this.clock.tick(1450);
    assert.strictEqual(get(controller, 'isTransitioning'), true);
    this.clock.tick(55);
    assert.strictEqual(get(controller, 'isTransitioning'), false);
  });

  // TEST ACTION: transitionNext

  test('should immediately clear isTransitioning for /thank-you', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'thank-you');

    controller.send('transitionNext');

    assert.strictEqual(get(controller, 'isTransitioning'), false);
  });

  test('should transition for 1500ms for /timeline', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'timeline');

    controller.send('transitionNext');

    assert.strictEqual(get(controller, 'isTransitioning'), true);
    this.clock.tick(1450);
    assert.strictEqual(get(controller, 'isTransitioning'), true);
    this.clock.tick(55);
    assert.strictEqual(get(controller, 'isTransitioning'), false);
  });
});
