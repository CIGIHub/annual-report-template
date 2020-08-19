import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 11 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide11-fr', async function(assert) {
    await visit('/fr/slide11-en');

    assert.equal(currentURL(), '/fr/slide11-fr');
  });
});
