import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 3 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide3-en', async function(assert) {
    await visit('/en/slide3-fr');

    assert.equal(currentURL(), '/en/slide3-en');
  });
});
