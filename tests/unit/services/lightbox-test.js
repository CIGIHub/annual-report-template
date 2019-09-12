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

    service.showTableOfContents();

    assert.strictEqual(get(service, 'showLightbox'), 'tableofcontents');
  });

  test('should close table of contents lightbox', function(assert) {
    const service = this.owner.lookup('service:lightbox');
    set(service, 'showLightbox', 'tableofcontents');

    service.closeLightbox();

    assert.strictEqual(get(service, 'showLightbox'), null);
  });
});
