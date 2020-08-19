import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 13 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide13-en', async function(assert) {
    await visit('/en/slide13-fr');

    assert.equal(currentURL(), '/en/slide13-en');
  });
});
