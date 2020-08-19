import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/financials/notes redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/finances/notes', async function(assert) {
    await visit('/fr/financials/notes');

    assert.equal(currentURL(), '/fr/finances/notes');
  });
});
