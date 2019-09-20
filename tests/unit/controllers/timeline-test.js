import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | timeline', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:timeline');
    assert.ok(controller);
  });
});
