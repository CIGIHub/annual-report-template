import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/financials/sommaire de la situation financiere redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/finances/sommaire-de-la-situation-financiere', async function(assert) {
    await visit('/fr/financials/summarized-statement-of-financial-position');

    assert.equal(currentURL(), '/fr/finances/sommaire-de-la-situation-financiere');
  });
});
