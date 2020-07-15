import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | fr/timeline', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:fr/timeline');
    assert.ok(controller);
  });
});
