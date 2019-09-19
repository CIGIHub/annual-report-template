import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | thank-you', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:thank-you');
    assert.ok(controller);
  });
});
