import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 2 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide2-en', async function(assert) {
    await visit('/en/slide2-fr');

    assert.equal(currentURL(), '/en/slide2-en');
  });
});
