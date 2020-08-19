import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 7 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide7-en', async function(assert) {
    await visit('/en/slide7-fr');

    assert.equal(currentURL(), '/en/slide7-en');
  });
});
