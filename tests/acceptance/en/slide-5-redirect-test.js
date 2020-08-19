import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 5 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide5-en', async function(assert) {
    await visit('/en/slide5-fr');

    assert.equal(currentURL(), '/en/slide5-en');
  });
});
