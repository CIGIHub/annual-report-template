import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | protecting-elections-from-foreign-interference', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:protecting-elections-from-foreign-interference');
    assert.ok(route);
  });
});
