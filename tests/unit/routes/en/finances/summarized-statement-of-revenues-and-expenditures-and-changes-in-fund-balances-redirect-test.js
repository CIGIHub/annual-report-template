import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | en/finances/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:en/finances/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances-redirect');
    assert.ok(route);
  });
});
