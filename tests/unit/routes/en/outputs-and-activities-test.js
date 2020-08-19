import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/outputs-and-activities', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/outputs-and-activities');
    assert.ok(route);
  });
});
