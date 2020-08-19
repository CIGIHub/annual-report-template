import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/financials/sommaire des recettes et des depenses et evolution du solde du fonds redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/finances/sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds', async function(assert) {
    await visit('/fr/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');

    assert.equal(currentURL(), '/fr/finances/sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds');
  });
});
