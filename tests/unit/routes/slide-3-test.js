import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | slide-3', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:slide-3');
    assert.ok(route);
  });
});
