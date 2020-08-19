import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 11 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide11-en', async function(assert) {
    await visit('/en/slide11-fr');

    assert.equal(currentURL(), '/en/slide11-en');
  });
});
