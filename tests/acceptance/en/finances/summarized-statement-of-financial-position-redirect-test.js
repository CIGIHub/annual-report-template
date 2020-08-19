import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/finances/summarized statement of financial position redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/financials/summarized-statement-of-financial-position', async function(assert) {
    await visit('/en/finances/sommaire-de-la-situation-financiere');

    assert.equal(currentURL(), '/en/financials/summarized-statement-of-financial-position');
  });
});
