import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/financials/auditors report redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/finances/rapport-des-verificateurs', async function(assert) {
    await visit('/fr/financials/auditors-report');

    assert.equal(currentURL(), '/fr/finances/rapport-des-verificateurs');
  });
});
