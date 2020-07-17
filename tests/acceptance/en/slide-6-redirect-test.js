import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 6 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide6-en', async function(assert) {
    await visit('/en/slide6-fr');

    assert.equal(currentURL(), '/en/slide6-en');
  });
});
