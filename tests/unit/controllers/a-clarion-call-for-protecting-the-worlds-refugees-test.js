import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | a-clarion-call-for-protecting-the-worlds-refugees', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:a-clarion-call-for-protecting-the-worlds-refugees');
    assert.ok(controller);
  });
});
