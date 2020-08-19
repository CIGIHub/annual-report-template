import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 8 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide8-en', async function(assert) {
    await visit('/en/slide8-fr');

    assert.equal(currentURL(), '/en/slide8-en');
  });
});
