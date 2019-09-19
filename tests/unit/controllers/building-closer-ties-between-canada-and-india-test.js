import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | building-closer-ties-between-canada-and-india', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:building-closer-ties-between-canada-and-india');
    assert.ok(controller);
  });
});
