import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';
import { module, test } from 'qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:lightbox', Service.extend({
      showLightbox: null,
    }));
    this.owner.register('service:router', Service.extend({
      currentRouteName: '',
    }));
  });

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });

  test('should have lightBackground=false for /', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'index');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /a-bretton-woods-moment-for-the-digital-age', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-bretton-woods-moment-for-the-digital-age');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /a-clarion-call-for-protecting-the-worlds-refugees', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'a-clarion-call-for-protecting-the-worlds-refugees');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /braiding-legal-orders', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'braiding-legal-orders');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /building-closer-ties-between-canada-and-india', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'building-closer-ties-between-canada-and-india');
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

  test('should have lightBackground=false for /financials/auditors-report when the lightbox is active', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'financials.auditors-report');
    set(controller, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /governing-cyberspace-during-a-crisis-in-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'governing-cyberspace-during-a-crisis-in-trust');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /governing-the-digital-public-sphere', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'governing-the-digital-public-sphere');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /informing-the-debate-around-internet-security-and-trust', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'informing-the-debate-around-internet-security-and-trust');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /media-and-mass-atrocity-the-rwanda-genocide-and-beyond', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'media-and-mass-atrocity-the-rwanda-genocide-and-beyond');
    set(controller, 'lightbox.showLightbox', null);

    assert.strictEqual(get(controller, 'lightBackground'), false);
  });

  test('should have lightBackground=false for /models-for-data-governance', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'models-for-data-governance');
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

  test('should have lightBackground=false for /protecting-elections-from-foreign-interference', function(assert) {
    const controller = this.owner.lookup('controller:application');
    set(controller, 'router.currentRouteName', 'protecting-elections-from-foreign-interference');
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
});
