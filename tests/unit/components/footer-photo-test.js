import { get, set } from '@ember/object';
import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Component | footer-photo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const component = this.owner.factoryFor('component:footer-photo').create();
    assert.ok(component);
  });

  test('should have correct classes when darkFooter=false', function(assert) {
    const component = this.owner.factoryFor('component:footer-photo').create();
    set(component, 'darkFooter', false);

    assert.strictEqual(get(component, 'footerClass'), 'footer clearfix show-for-large');
  });

  test('should have correct classes when darkFooter=true', function(assert) {
    const component = this.owner.factoryFor('component:footer-photo').create();
    set(component, 'darkFooter', true);

    assert.strictEqual(get(component, 'footerClass'), 'footer clearfix show-for-large footer-dark');
  });
});
