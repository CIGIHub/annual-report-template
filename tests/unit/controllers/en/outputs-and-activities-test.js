import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | en/outputs-and-activities', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:en/outputs-and-activities');
    assert.ok(controller);
  });
});
