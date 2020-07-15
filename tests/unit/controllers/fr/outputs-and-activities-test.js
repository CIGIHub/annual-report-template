import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | fr/outputs-and-activities', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:fr/outputs-and-activities');
    assert.ok(controller);
  });
});
