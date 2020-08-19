import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | fr/slide 6 redirect', function(hooks) {
  setupApplicationTest(hooks);

  test('should redirect to /fr/slide6-fr', async function(assert) {
    await visit('/fr/slide6-en');

    assert.equal(currentURL(), '/fr/slide6-fr');
  });
});
