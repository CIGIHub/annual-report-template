import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 4 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide4-en', async function(assert) {
    await visit('/en/slide4-fr');

    assert.equal(currentURL(), '/en/slide4-en');
  });
});
