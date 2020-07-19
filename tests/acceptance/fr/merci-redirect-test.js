import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/merci redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/merci', async function(assert) {
    await visit('/fr/thank-you');

    assert.equal(currentURL(), '/fr/merci');
  });
});
