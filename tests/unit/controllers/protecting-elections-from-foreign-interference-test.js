import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | protecting-elections-from-foreign-interference', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:protecting-elections-from-foreign-interference');
    assert.ok(controller);
  });
});
