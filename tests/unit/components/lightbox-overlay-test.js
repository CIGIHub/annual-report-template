import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';
import { module, test } from 'qunit';

module('Unit | Component | lightbox-overlay', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:lightbox', Service.extend({
      showLightbox: null,
    }));
  });

  test('it exists', function(assert) {
    const component = this.owner.factoryFor('component:lightbox-overlay').create();
    assert.ok(component);
  });

  test('should have showTableOfContents=false when lightbox.showLightbox=null', function(assert) {
    const component = this.owner.factoryFor('component:lightbox-overlay').create();
    set(component, 'lightbox.showLightbox', null);

    assert.strictEqual(get(component, 'showTableOfContents'), false);
  });

  test('should have showTableOfContents=true when lightbox.showLightbox=tableofcontents', function(assert) {
    const component = this.owner.factoryFor('component:lightbox-overlay').create();
    set(component, 'lightbox.showLightbox', 'tableofcontents');

    assert.strictEqual(get(component, 'showTableOfContents'), true);
  });
});
