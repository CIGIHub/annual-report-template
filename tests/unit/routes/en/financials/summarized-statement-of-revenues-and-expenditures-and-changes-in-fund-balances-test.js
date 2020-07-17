import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
    assert.ok(route);
  });
});
