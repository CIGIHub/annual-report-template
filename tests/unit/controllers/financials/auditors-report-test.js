import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | financials/auditors-report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:financials/auditors-report');
    assert.ok(controller);
  });
});
