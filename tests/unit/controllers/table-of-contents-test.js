import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | table-of-contents', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:table-of-contents');
    assert.ok(controller);
  });
});
