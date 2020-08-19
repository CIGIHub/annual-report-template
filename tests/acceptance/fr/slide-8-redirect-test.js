import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 8 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide8-fr', async function(assert) {
    await visit('/fr/slide8-en');

    assert.equal(currentURL(), '/fr/slide8-fr');
  });
});
