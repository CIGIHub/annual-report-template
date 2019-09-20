import { module, test } from 'qunit';
import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';

module('Unit | Service | lightbox', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const service = this.owner.lookup('service:lightbox');
    assert.ok(service);
    assert.strictEqual(get(service, 'showLightbox'), null);
  });

  test('should show table of contents lightbox', function(assert) {
    const service = this.owner.lookup('service:lightbox');
    set(service, 'showLightbox', null);
    set(service, 'subType', null);

    service.showTableOfContents();

    assert.strictEqual(get(service, 'showLightbox'), 'tableofcontents');
    assert.strictEqual(get(service, 'subType'), null);
  });

  test('should close table of contents lightbox', function(assert) {
    const service = this.owner.lookup('service:lightbox');
    set(service, 'showLightbox', 'tableofcontents');
    set(service, 'subType', null);

    service.closeLightbox();

    assert.strictEqual(get(service, 'showLightbox'), null);
    assert.strictEqual(get(service, 'subType'), null);
  });

  test('should show table of contents acknowledgements', function(assert) {
    const service = this.owner.lookup('service:lightbox');
    set(service, 'showLightbox', 'tableofcontents');
    set(service, 'subType', null);

    service.showTableOfContentsAcknowledgements();

    assert.strictEqual(get(service, 'showLightbox'), 'tableofcontents');
    assert.strictEqual(get(service, 'subType'), 'acknowledgements');
  });

  test('should close table of contents acknowledgements', function(assert) {
    const service = this.owner.lookup('service:lightbox');
    set(service, 'showLightbox', 'tableofcontents');
    set(service, 'subType', 'acknowledgements');

    service.closeTableOfContentsAcknowledgements();

    assert.strictEqual(get(service, 'showLightbox'), 'tableofcontents');
    assert.strictEqual(get(service, 'subType'), null);
  });

  test('should show publication lightbox', function(assert) {
    const service = this.owner.lookup('service:lightbox');
    set(service, 'showLightbox', null);
    set(service, 'subType', null);

    service.showPublicationLightbox();

    assert.strictEqual(get(service, 'showLightbox'), null);
    assert.strictEqual(get(service, 'subType'), 'publication');
  });

  test('should close publication lightbox', function(assert) {
    const service = this.owner.lookup('service:lightbox');
    set(service, 'showLightbox', null);
    set(service, 'subType', 'publication');

    service.closeLightbox();

    assert.strictEqual(get(service, 'showLightbox'), null);
    assert.strictEqual(get(service, 'subType'), null);
  });
});
