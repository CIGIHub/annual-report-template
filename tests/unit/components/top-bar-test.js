import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | top-bar', function(hooks) {
  setupTest(hooks);

  test('should hide menu when on table of contents route', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();

    component.set('currentRoute', 'table-of-contents');

    assert.strictEqual(component.get('hideMenu'), true);
  });

  test('should not hide menu on any other route', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();

    assert.strictEqual(component.get('hideMenu'), false);
  });

  test('should have correct share route for /', function(assert) {
    const component = this.owner.factoryFor('component:top-bar').create();

    component.set('currentRoute', 'index');

    assert.strictEqual(component.get('shareRoute'), 'https://www.cigionline.org/interactives/2019annualreport/');
  });
});
