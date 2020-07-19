import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fr/financials/sommaire-de-la-situation-financiere-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:fr/financials/sommaire-de-la-situation-financiere-redirect');
    assert.ok(route);
  });
});
