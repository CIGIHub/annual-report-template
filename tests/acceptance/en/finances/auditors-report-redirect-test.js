import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/finances/auditors report redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/financials/auditors-report', async function(assert) {
    await visit('/en/finances/auditors-report');

    assert.equal(currentURL(), '/en/financials/auditors-report');
  });
});
