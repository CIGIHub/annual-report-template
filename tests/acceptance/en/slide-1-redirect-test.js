import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 1 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide1-en', async function(assert) {
    await visit('/en/slide1-fr');

    assert.equal(currentURL(), '/en/slide1-en');
  });
});
