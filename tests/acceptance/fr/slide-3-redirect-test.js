import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 3 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide3-fr', async function(assert) {
    await visit('/fr/slide3-en');

    assert.equal(currentURL(), '/fr/slide3-fr');
  });
});
