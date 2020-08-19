import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 4 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide4-fr', async function(assert) {
    await visit('/fr/slide4-en');

    assert.equal(currentURL(), '/fr/slide4-fr');
  });
});
