import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | en/slide 12 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /en/slide12-en', async function(assert) {
    await visit('/en/slide12-fr');

    assert.equal(currentURL(), '/en/slide12-en');
  });
});
