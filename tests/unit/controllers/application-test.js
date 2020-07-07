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

  test('should have bounceScrollArrowDown=true for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), true);
  });

  test('should have bounceScrollArrowDown=false for /slide10', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-10');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /slide-2', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-2');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /slide7', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-7');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /slide1', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide1');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /curbing-cultural-appropriation-through-intellectual-property-law', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property-law');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/balance-sheet', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.balance-sheet');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /financials/revenue-and-expenses', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.revenue-and-expenses');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /slide4', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-4');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /slide5', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-5');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /slide6', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-6');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /slide8', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-8');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /slide3', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-3');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /slide9', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-9');

    assert.strictEqual(get(controller, 'bounceScrollArrowDown'), false);
  });

  test('should have bounceScrollArrowDown=false for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

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

  test('should have hideMobileOverlay=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /slide10', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-10');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /slide-2', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-2');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /slide7', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-7');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /slide1', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide1');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /curbing-cultural-appropriation-through-intellectual-property-law', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property-law');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /financials/balance-sheet', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.balance-sheet');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /financials/revenue-and-expenses', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.revenue-and-expenses');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /slide4', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-4');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /slide5', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-5');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /slide6', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-6');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /slide8', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-8');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=false for /slide3', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-3s');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=true for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), true);
  });

  test('should have hideMobileOverlay=false for /slide9', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-9');

    assert.strictEqual(get(controller, 'hideMobileOverlay'), false);
  });

  test('should have hideMobileOverlay=true for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

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

  test('should have lightBackground=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide10', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-10');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide-2', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-2');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide7', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-7');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide1', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide1');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /chairs-message when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /curbing-cultural-appropriation-through-intellectual-property-law', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property-law');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=true for /financials/balance-sheet', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.balance-sheet');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=true for /financials/revenue-and-expenses', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.revenue-and-expenses');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /financials/auditors-report when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide4', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-4');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide5', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-5');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide6', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-6');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide8', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-8');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide3', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-3');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /outputs-and-activities when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=true for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), true);
  });

  test('should have lightBackground=false for /presidents-message when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /slide9', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-9');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');
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

  test('should have scrollableContentPage=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'scrollableContentPage'), false);
  });

  test('should have scrollableContentPage=true for /slide10', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-10');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /slide-2', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-2');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /slide7', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-7');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /slide1', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide1');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /curbing-cultural-appropriation-through-intellectual-property-law', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property-law');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/balance-sheet', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.balance-sheet');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /financials/revenue-and-expenses', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.revenue-and-expenses');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /slide4', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-4');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /slide5', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-5');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /slide6', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-6');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /slide8', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-8');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /slide3', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-3');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /slide9', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-9');

    assert.strictEqual(get(controller, 'scrollableContentPage'), true);
  });

  test('should have scrollableContentPage=true for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

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

  test('should have showDotNav=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'showDotNav'), false);
  });

  test('should have showDotNav=true for / when the dot-nav has already been shown', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'dotNavShown', true);
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide10', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-10');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide-2', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-2');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide7', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-7');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide1', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide1');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /chairs-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'chairs-message');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /curbing-cultural-appropriation-through-intellectual-property-law', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'curbing-cultural-appropriation-through-intellectual-property-law');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /exploring-the-four-internets-and-the-geopolitics-of-digital-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'exploring-the-four-internets-and-the-geopolitics-of-digital-governance');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/auditors-report', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/balance-sheet', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.balance-sheet');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/notes', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.notes');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /financials/revenue-and-expenses', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.revenue-and-expenses');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide4', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-4');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide5', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-5');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide6', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-6');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide8', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-8');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide3', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-3');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /outputs-and-activities', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'outputs-and-activities');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /presidents-message', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'presidents-message');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=true for /slide9', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'slide-9');

    assert.strictEqual(get(controller, 'showDotNav'), true);
  });

  test('should have showDotNav=false for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

    assert.strictEqual(get(controller, 'showDotNav'), false);
  });

  test('should have showDotNav=true for /table-of-contents when the dot-nav has already been shown', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'dotNavShown', true);
    set(controller, 'router.currentRouteName', 'table-of-contents');

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

  test('should have showScrollArrowDown=true for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

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

  test('should have showScrollArrowUp=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');

    assert.strictEqual(get(controller, 'showScrollArrowUp'), false);
  });

  test('should have showScrollArrowUp=true for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'table-of-contents');

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

  test('should immediately clear isTransitioning for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'index');

    controller.send('transitionBack');

    assert.strictEqual(get(controller, 'isTransitioning'), false);
  });

  test('should transition for 1500ms for /table-of-contents', function(assert) {
    const controller = this.owner.lookup('controller:application');
    controller.transitionToRoute = function() {
      return true;
    };
    set(controller, 'router.currentRouteName', 'table-of-contents');

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
