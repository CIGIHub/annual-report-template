import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fr/financials/sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds-redirect', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:fr/financials/sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds-redirect');
    assert.ok(route);
  });
});
