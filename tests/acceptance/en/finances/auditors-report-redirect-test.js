import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/finances/rapport-des-verificateurs redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/financials/auditors-report', async function(assert) {
    await visit('/en/finances/rapport-des-verificateurs');

    assert.equal(currentURL(), '/en/financials/auditors-report');
  });
});
