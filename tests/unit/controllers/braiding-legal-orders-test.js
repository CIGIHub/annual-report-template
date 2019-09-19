import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | braiding-legal-orders', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:braiding-legal-orders');
    assert.ok(controller);
  });
});
