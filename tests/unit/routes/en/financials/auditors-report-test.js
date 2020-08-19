import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/financials/auditors-report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/financials/auditors-report');
    assert.ok(route);
  });
});
