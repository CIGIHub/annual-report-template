import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/finances/summarized statement of revenues and expenditures and changes in fund balances redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances', async function(assert) {
    await visit('/en/finances/sommaire-des-recettes-et-des-depenses-et-evolution-du-solde-du-fonds');

    assert.equal(currentURL(), '/en/financials/summarized-statement-of-revenues-and-expenditures-and-changes-in-fund-balances');
  });
});
