import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | slide-1', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:slide-1');
    assert.ok(controller);
  });
});
