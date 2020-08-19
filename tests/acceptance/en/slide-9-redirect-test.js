import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 9 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide9-en', async function(assert) {
    await visit('/en/slide9-fr');

    assert.equal(currentURL(), '/en/slide9-en');
  });
});
