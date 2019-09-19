import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | chairs-message', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:chairs-message');
    assert.ok(controller);
  });
});
