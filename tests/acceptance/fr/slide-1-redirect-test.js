import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 1 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide1-fr', async function(assert) {
    await visit('/fr/slide1-en');

    assert.equal(currentURL(), '/fr/slide1-fr');
  });
});
