import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | en/table-of-contents', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:en/table-of-contents');
    assert.ok(controller);
  });
});
