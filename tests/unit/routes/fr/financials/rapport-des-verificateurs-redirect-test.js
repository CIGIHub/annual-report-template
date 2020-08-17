import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fr/financials/rapport-des-verificateurs-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fr/financials/rapport-des-verificateurs-redirect');
    assert.ok(route);
  });
});
