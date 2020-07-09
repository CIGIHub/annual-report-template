import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | slide-10', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:slide-10');
    assert.ok(controller);
  });
});
