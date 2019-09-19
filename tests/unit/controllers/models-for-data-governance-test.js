import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | models-for-data-governance', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:models-for-data-governance');
    assert.ok(controller);
  });
});
