import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fr/finances/sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:fr/finances/sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds');
    assert.ok(route);
  });
});
