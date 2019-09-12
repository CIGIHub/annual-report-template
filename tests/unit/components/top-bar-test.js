import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | top-bar', function(hooks) {
  setupTest(hooks);

  test('should have light-background menuClass when darkMenu is true', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();

    component.set('darkMenu', true);

    assert.strictEqual(component.get('menuClass'), 'light-background');
  });

  test('should have dark-background menuClass when darkMenu is false', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();

    component.set('darkMenu', false);

    assert.strictEqual(component.get('menuClass'), 'dark-background');
  });

  test('should have hide-menu menuClass when on table of contents route', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();

    component.set('currentRoute', 'table-of-contents');

    assert.ok(component.get('menuClass').includes('hide-menu'));
  });
});
