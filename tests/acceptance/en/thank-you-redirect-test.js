import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/thank you redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/thank-you', async function(assert) {
    await visit('/en/merci');

    assert.equal(currentURL(), '/en/thank-you');
  });
});
