import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 10 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide10-en', async function(assert) {
    await visit('/en/slide10-fr');

    assert.equal(currentURL(), '/en/slide10-en');
  });
});
