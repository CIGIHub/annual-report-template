import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/finances/notes redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/financials/notes', async function(assert) {
    await visit('/en/finances/notes');

    assert.equal(currentURL(), '/en/financials/notes');
  });
});
